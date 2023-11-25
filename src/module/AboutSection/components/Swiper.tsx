'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import style from '../AboutSection.module.scss';
import 'swiper/css';
import { CustomCard } from '../../../components';

export default function ProjectSwiper() {
	const swiper = useSwiper();
	const progressContent = useRef(null);

	const onAutoplayTimeLeft = (s, time, progress) => {
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				style={{ maxHeight: 100 }}>
				<SwiperSlide>
					<CustomCard>Slide 2</CustomCard>
				</SwiperSlide>
				<SwiperSlide>
					<CustomCard>Slide 3</CustomCard>
				</SwiperSlide>{' '}
				<SwiperSlide>
					<CustomCard>Slide 4</CustomCard>
				</SwiperSlide>{' '}
				<SwiperSlide>
					<CustomCard>Slide 5</CustomCard>
				</SwiperSlide>
				<div className={style.autoplayProgress} slot='container-end'>
					<span ref={progressContent}></span>
				</div>
			</Swiper>
		</>
	);
}
