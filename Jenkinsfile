pipeline {
    agent any

    stages {
        stage('Clone app') {
            steps {
                git branch:'main', url: 'https://github.com/minh2207/Testing.git'
        pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
    sh "docker build -t minh2207/testing ."
    			sh "docker push minh2207/testing"

}
            }
        }
    }
}
    }
}
