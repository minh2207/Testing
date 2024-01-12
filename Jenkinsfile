pipeline {
    agent any

    stages {
        stage('Compile and TestTest') {
            steps {
                // Get some code from a GitHub repository
                git branch:'main', url: 'https://github.com/minh2207/Testing.git'

                // Run Maven on a Unix agent.
                // bat "mvn clean compile test"

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
        }
        // stage('Build Spring Boot JAR File') {
        //     steps {
        //         bat "mvn clean package "
        //     }
        // }
        stage('Docker Images') {
            steps {
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
