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
                sh "apt-get install docker.io"
		sh "docker build -t minh2207/testing:latest ."
            }
        }
        stage('Docker Deloy') {
            steps {
                script{
                    withCredentials([usernamePassword(credentialsId:'docker-hub',usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD')]){
                        echo "This works: $USERNAME $PASSWORD"
                        sh "docker login --username $USERNAME --password $PASSWORD"
                        sh "docker push minh2207/testing:latest"
                    }
                }
            }
        }
    }
}
