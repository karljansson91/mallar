DOCKER_IMAGES =  $(shell docker images -q)

start:
	docker-compose up -d finance-be

db-start:
	docker-compose up -d mongo-db

install:
	docker-compose build --no-cache finance-be

log:
	docker logs -f finance-be

db-log:
	docker logs -f mongo-db

bash:
	docker exec -it finance-be bash

db-bash:
	docker exec -it mongo-db bash

clean: 
	docker-compose stop
	docker-compose rm
	@docker rmi -f $(DOCKER_IMAGES)