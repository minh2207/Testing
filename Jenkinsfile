pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/minh2207/Testing.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {                  
                    // Build Docker image
                    bat "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Docker Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        echo "This works: $USERNAME $PASSWORD"
                        
                        // Đăng nhập vào Docker Hub
                        bat "docker login --username $USERNAME --password $PASSWORD"
                        
                        // Push Docker image lên Docker Hub
                        bat "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
    }
}
