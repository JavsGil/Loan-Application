### Folder strustured see:
- `folder-structure.txt`

### How to Set Up the Project

1. Clone the repository:
- git clone `<repository-url>`
- cd `<project-directory>`
- cp `.env.example .env`
2. Make sure you have Docker and Docker Compose installed on your system.
3. Run `docker-compose up` in the project root with the following content.
4. Run migrations with `typeorm migration:run`


### Create Application
- Method: POST
- URL: /applications
- Body: { "applicantName": "John Doe", "amount": 5000 }
- Response: Application object

### Get Application by ID
- Method: GET
- URL: /applications/{id}
- Response: Application object

### Get All Applications
- Method: GET
- URL: /applications
- Response: Array of Application objects