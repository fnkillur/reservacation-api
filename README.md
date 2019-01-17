# reservacation-api
제주도 카페 예약 사이트 - api

# 시작하기

* sequelize-cli global 설치
```
$ npm i -g sequelize-cli
```
* vagrant 설치
```
$ vagrant up
```
* vagrant 프로비저닝
```
$ vagrant provision
```
* vagrant 접속 후 서버 실행
```
$ vagrant ssh 
$ cd /home/ubuntu/app/reservacation-api
$ npm start
```

* 로컬피씨 hosts 등록
``` 
$ echo '10.0.0.40    api.reservacation.com' | sudo tee -a /etc/hosts
```