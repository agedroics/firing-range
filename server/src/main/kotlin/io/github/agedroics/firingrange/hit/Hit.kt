package io.github.agedroics.firingrange.hit

import java.time.Instant
import java.util.*

data class Hit(
    val x: Float,
    val y: Float,
    val uuid: UUID = UUID.randomUUID(),
    val instant: Instant = Instant.now()
)
