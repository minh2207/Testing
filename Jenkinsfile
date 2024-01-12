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
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t demo-testing .'
                }    
            }
        }
        
        stage('Run Docker Container') {
            steps {
                 withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                       sh 'docker run -dp 3000:3000 demo-testing'
                 }
            }
        }
    }
}
