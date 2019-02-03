'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Stores', [{
            store_name: '스타벅스 아주대점',
            address: '경기도 수원시 팔달구 우만2동 월드컵로 205',
            detail_address: '205',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-215-4516',
            store_description: '카페',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            latitude: 37.509748,
            longitude: 127.013362,
            createdAt: '2019-01-14 15:30:00',
            updatedAt: '2019-01-14 15:30:00',
        }, {
            store_name: '로즈버드',
            address: '경기도 수원시 영통구 원천동 아주로 10',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-111-2323',
            store_description: '카페 로즈버드',
            latitude: 37.508954,
            longitude: 127.013953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-13 14:12:24',
            updatedAt: '2019-01-13 14:12:24'
        }, {
            store_name: '탐앤탐스 수원아주대점',
            address: '경기도 수원시 영통구 원천동 아주로 46',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '24시 카페',
            latitude: 37.508746,
            longitude: 127.013544,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '파리바게트 아주대점',
            address: '경기도 수원시 영통구 원천동 18-6',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-216-5801',
            store_description: '파리바게트 빵집',
            latitude: 37.508427,
            longitude: 127.014118,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-15 14:12:24',
            updatedAt: '2019-01-15 14:12:24'
        }, {
            store_name: '카페5',
            address: '경기도 수원시 영통구 원천동 아주로 38',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 다섯번째',
            latitude: 37.508294,
            longitude: 127.014100,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '카페6',
            address: '경기도 수원시 영통구 원천동 아주로 30',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 여섯번째',
            latitude: 37.508664,
            longitude: 127.013953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '카페777777',
            address: '경기도 수원시 영통구 원천동 아주로 35',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 일곱번째',
            latitude: 37.508882,
            longitude: 127.013953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stores', null, {});
    }
};
