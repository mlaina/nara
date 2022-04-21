---
to: ../gen/out/postman.json
---


{
			"name": "<%= mayusname %>",
			"item": [
				{
					"name": "getAll /<%= pluralname %>",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNuZWdyb0BnbWFpbC5jb20iLCJpYXQiOjE1OTkzMDE3NDIsImV4cCI6MTU5OTM4ODE0Mn0.Ltsipns3vw1euPUCJX4LCuUWitQU_Tr80KJjTtMfO4mmV-vS3jVT8SUxuCyCWiC4Mc3OVK5Sttm_G7GrRgFbwQ",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/<%= pluralname %>",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"<%= pluralname %>"
							]
						}
					},
					"response": []
				},
				{
					"name": "get /<%= name %>/:id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0cmV6em9AZ21haWwuY29tIiwiaWF0IjoxNTgyMjM2MDk4LCJleHAiOjE1ODIzMjI0OTh9.6eJrl6Ve0_b_U35_cenNErHWFzNBaHB-BDNpPnmvLO8",
								"description": "LoginPage Token",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:8080/<%= name %>/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"<%= name %>",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete /<%= name %>/:id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0cmV6em9AZ21haWwuY29tIiwiaWF0IjoxNTgyMjM2MDk4LCJleHAiOjE1ODIzMjI0OTh9.6eJrl6Ve0_b_U35_cenNErHWFzNBaHB-BDNpPnmvLO8",
								"description": "LoginPage Token",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:8080/<%= name %>/27",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"<%= name %>",
								"27"
							]
						}
					},
					"response": []
				},
				{
					"name": "update /<%= name %>/:id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"name": "Content-Type",
								"type": "text",
								"value": "application/json"
							},
							{
								"description": "LoginPage Token",
								"key": "authorization",
								"type": "text",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0cmV6em9AZ21haWwuY29tIiwiaWF0IjoxNTgyMjM2MDk4LCJleHAiOjE1ODIzMjI0OTh9.6eJrl6Ve0_b_U35_cenNErHWFzNBaHB-BDNpPnmvLO8"
							},
							{
								"key": "",
								"type": "text",
								"value": "",
								"disabled": true
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"JULIO\"\r\n}\r\n"
						},
						"url": {
							"raw": "http://localhost:8080/<%= name %>/26",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"<%= name %>",
								"26"
							]
						}
					},
					"response": []
				},
				{
					"name": "insert /<%= pluralname %>",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNuZWdyb0BnbWFpbC5jb20iLCJpYXQiOjE1OTkzMDMwMjMsImV4cCI6MTU5OTM4OTQyM30.jKIYQunW7PdJhrMNAYZCGKvuF4ewQ-bkKCIa8fNSecr7scomTnGqKuaSwUAJF_IEkE8dCQTvGhcEvoe46Wrr1w",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"name": "Content-Type",
								"value": "application/json",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:8080/<%= pluralname %>",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"<%= pluralname %>"
							]
						}
					},
					"response": []
				}
			],
			"protocolProfileBehavior": {}
		}