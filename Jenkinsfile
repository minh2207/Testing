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
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://hub.docker.com/') {
                    	sh 'docker build -t demo-testing .'
			sh 'docker push minh2207/testing:demo-testing'
                }    
            }
        }
        
        stage('Run Docker Container') {
            steps {
                 withDockerRegistry(credentialsId: 'docker-hub', url: 'https://hub.docker.com/') {
                      	sh 'docker run -dp 3000:3000 minh2207/testing:demo-testing'
                 }
            }
        }
    }
}
