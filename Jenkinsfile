pipeline {
    agent any

    stages {
        stage('Clone app') {
            steps {
                git branch: 'main', url: 'https://github.com/minh2207/Testing.git'
            }
        }
        stage('Build') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
    sh "docker build -t minh2207/demojenkins ."

}
            }
        }
         stage('Push') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
    			sh "docker push minh2207/demojenkins"

}
            }
        }
        stage('Deploy') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
    			sh "docker run -dp 3000:3000 minh2207/demojenkins"

}
            }
        }
    }
 }
    
