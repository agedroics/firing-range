package io.github.agedroics.firingrange.hit

import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/emergency-stop")
class EmergencyStopController(private val hitGenerator: HitGenerator) {

    @PutMapping
    fun doEmergencyStop() {
        hitGenerator.doEmergencyStop()
    }
}
