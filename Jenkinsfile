pipeline {
    Dockerhub
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/minh2207/Testing.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                withDockerRegistry(credentialsId: 'minh2207', url: 'https://index.docker.io/v1/') {
                    	sh 'docker build -t demo-testing .'
			sh 'docker push minh2207/testing:demo-testing'
                }    
            }
        }
        
        stage('Run Docker Container') {
            steps {
                 withDockerRegistry(credentialsId: 'minh2207', url: 'https://index.docker.io/v1/') {
                      	sh 'docker run -dp 3000:3000 minh2207/testing:demo-testing'
                 }
            }
        }
    }
}
