pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "myapp:${env.BUILD_ID}"
        DOCKER_REGISTRY = 'https://your.docker.registry'
        DOCKER_REGISTRY_CREDENTIALS = 'your-registry-credentials-id'
    }

    stages {
        stage('Build and Push Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: "${env.DOCKER_REGISTRY_CREDENTIALS}", url: "${env.DOCKER_REGISTRY}") {
                        // Building Docker Image
                        dockerImage = docker.build("${env.DOCKER_IMAGE}")

                        // Pushing Image to Registry
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Run') {
            steps {
                script {
                    // Running Docker Container
                    sh "docker run --name myapp-container -d -p 8080:8080 ${env.DOCKER_IMAGE}"
                }
            }
        }
    }
}
