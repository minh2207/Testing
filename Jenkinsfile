pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git credentialsId: 'minh2207', url: 'https://github.com/minh2207/Testing.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }
        
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 8080:8080 my-node-app'
            }
        }
    }
}
