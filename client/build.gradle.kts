import com.github.gradle.node.npm.task.NpmTask

plugins {
    id("com.github.node-gradle.node") version "3.3.0"
}

repositories {
    mavenCentral()
}

node {
    download.set(true)
    version.set("16.14.0")
}

tasks.register<NpmTask>("build") {
    dependsOn(tasks.npmInstall)
    npmCommand.set(listOf("run", "build"))
//    workingDir.set(file("${project.projectDir}/client"))
}
