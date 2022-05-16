package io.github.agedroics.firingrange.hit

import org.slf4j.LoggerFactory
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.context.ApplicationEventPublisher
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import kotlin.random.Random

@Component
class HitGenerator(private val applicationEventPublisher: ApplicationEventPublisher) {

    private val logger = LoggerFactory.getLogger(javaClass)

    private val executor = Executors.newSingleThreadScheduledExecutor()

    @EventListener(ApplicationReadyEvent::class)
    fun scheduleHitGeneration() {
        executor.schedule(this::generateHitAndScheduleNext, Random.nextLong(1, 5), TimeUnit.SECONDS)
    }

    private fun generateHitAndScheduleNext() {
        generateHit()
        scheduleHitGeneration()
    }

    private fun generateHit() {
        val hit = Hit(Random.nextFloat() * 200 - 100, Random.nextFloat() * 200 - 100)
        applicationEventPublisher.publishEvent(hit)
    }

    fun doEmergencyStop() {
        logger.warn("Emergency stop triggered")
        executor.shutdownNow()
    }
}
