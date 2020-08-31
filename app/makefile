.PHONY: startinstall log clean

DOCKER_IMAGES =  $(shell docker images -q)

start:
	docker-compose up -d mallar-fe

build:
	docker-compose up --build -d mallar-fe

install:
	docker-compose build --no-cache mallar-fe

log:
	docker logs -f mallar-fe

bash:
	docker exec -it mallar-fe bash

clean: 
	docker-compose stop
	docker-compose rm
	@docker rmi -f $(DOCKER_IMAGES)

prod-build:
	docker-compose -f docker-compose-prod.yml up --build -d mallar-fe