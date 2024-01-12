pipeline {
    
    agent any
    
    environment {
        DOCKER_IMAGE = 'minh2207/testing:latest'
    }
    
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/minh2207/Testing.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Cài đặt Docker nếu chưa có
                    sh "curl -fsSL https://get.docker.com -o get-docker.sh"
                    sh "sudo sh get-docker.sh"
                    
                    // Build Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Docker Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        echo "This works: $USERNAME $PASSWORD"
                        
                        // Đăng nhập vào Docker Hub
                        sh "docker login --username $USERNAME --password $PASSWORD"
                        
                        // Push Docker image lên Docker Hub
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
    }
}pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'minh2207/testing:latest'
    }
    
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/minh2207/Testing.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Cài đặt Docker nếu chưa có
                    sh "curl -fsSL https://get.docker.com -o get-docker.sh"
                    sh "sudo sh get-docker.sh"
                    
                    // Build Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Docker Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        echo "This works: $USERNAME $PASSWORD"
                        
                        // Đăng nhập vào Docker Hub
                        sh "docker login --username $USERNAME --password $PASSWORD"
                        
                        // Push Docker image lên Docker Hub
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
    }
}
