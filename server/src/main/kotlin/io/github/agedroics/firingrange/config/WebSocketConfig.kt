package io.github.agedroics.firingrange.config

import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.messaging.simp.config.MessageBrokerRegistry
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker
import org.springframework.web.socket.config.annotation.StompEndpointRegistry
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer

@Configuration
@EnableWebSocketMessageBroker
class WebSocketConfig(private val environment: Environment) : WebSocketMessageBrokerConfigurer {

    override fun registerStompEndpoints(registry: StompEndpointRegistry) {
        val endpointRegistration = registry.addEndpoint("/stomp")
        if (isDevProfileActive()) {
            endpointRegistration.setAllowedOrigins("http://localhost:3000")
        }
    }

    private fun isDevProfileActive() = environment.activeProfiles.contains("dev")

    override fun configureMessageBroker(registry: MessageBrokerRegistry) {
        registry.enableSimpleBroker("/topic")
    }
}
