package io.github.agedroics.firingrange.hit

import org.slf4j.LoggerFactory
import org.springframework.context.event.EventListener
import org.springframework.messaging.core.MessageSendingOperations
import org.springframework.stereotype.Service

@Service
class HitService(private val messageSendingOperations: MessageSendingOperations<String>) {

    private val logger = LoggerFactory.getLogger(javaClass)

    @EventListener
    fun registerHit(hit: Hit) {
        logger.info("Registering hit $hit")
        sendHit(hit)
    }

    private fun sendHit(hit: Hit) {
        messageSendingOperations.convertAndSend("/topic/hits", hit)
    }
}
