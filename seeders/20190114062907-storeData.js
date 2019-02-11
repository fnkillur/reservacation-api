'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Stores', [{
            store_name: '카페1',
            address: '제주도 제주시 제주동',
            detail_address: '205',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-215-4516',
            store_description: '카페',
            img_src: 'https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic1.jpg',
            latitude: 33.499748,
            longitude: 126.493362,
            createdAt: '2019-01-14 15:30:00',
            updatedAt: '2019-01-14 15:30:00',
        }, {
            store_name: '카페2',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-111-2323',
            store_description: '카페 로즈버드',
            latitude: 33.498954,
            longitude: 126.493953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-13 14:12:24',
            updatedAt: '2019-01-13 14:12:24'
        }, {
            store_name: '카페3',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '24시 카페',
            latitude: 33.498746,
            longitude: 126.493544,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '카페4',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-216-5801',
            store_description: '파리바게트 빵집',
            latitude: 33.498427,
            longitude: 126.494118,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-15 14:12:24',
            updatedAt: '2019-01-15 14:12:24'
        }, {
            store_name: '카페5',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 다섯번째',
            latitude: 33.498294,
            longitude: 126.494100,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '카페6',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 여섯번째',
            latitude: 33.498664,
            longitude: 126.493953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }, {
            store_name: '카페777777',
            address: '제주도 제주시 제주동',
            detail_address: '10',
            ceo_name: '김태영',
            ceo_email: 'fnkillur@naver.com',
            ceo_sms: '010-3953-5207',
            store_tel: '031-211-3565',
            store_description: '카페 일곱번째',
            latitude: 33.498882,
            longitude: 126.493953,
            img_src: 'https://hilton.co.kr/static/upload/hotel_main_20180808102604_lg_sp.jpg',
            createdAt: '2019-01-14 14:12:24',
            updatedAt: '2019-01-14 14:12:24'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Stores', null, {});
    }
};
