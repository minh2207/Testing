pipeline {
    agent any
    
    stages {
        stage('Clone repository') {
            steps {
                git credentialsID: 'Testing', url: 'https://github.com/minh2207/Testing.git'
            }
        }
        
        stage('Build and run with Docker') {
            steps {
                script {
                    docker.build('test') {
                        // Thực hiện các bước xây dựng Docker image
                        // Ví dụ:
                        sh 'docker build -t test .'
                    }
                    
                    // Chạy Docker container từ image đã xây dựng
                    // Ví dụ:
                    docker.image('test').run('-p 3000:3000') {
                        // Thực hiện các bước chạy trong container
                        // Ví dụ:
                        sh 'docker run -p 3000:3000 test'
                    }
                }
            }
        }
    }
}
