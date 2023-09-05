/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef, useState } from 'react'
import style from './page.module.scss'
import handleScroll from '../../libs/handleScroll'
import { Icons } from 'components/Icons'
import Link from 'next/link'

interface User {
  name: string
  photo: string
  location: string
  interests: string[]
  pins: string[]
  about: string
}

// ! user temporal
const user: User = {
  name: 'User name',
  photo: 'https://avatars.githubusercontent.com/u/1182328?v=5',
  location: 'User location',
  interests: ['Interest 1', 'Interest 2', 'Interest 3'],
  pins: [
    'https://www.mundodeportivo.com/alfabeta/hero/2020/09/one-punch-man-portada.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    'https://www.mundodeportivo.com/alfabeta/hero/2020/09/one-punch-man-portada.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://www.mundodeportivo.com/alfabeta/hero/2020/09/one-punch-man-portada.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://www.mundodeportivo.com/alfabeta/hero/2020/09/one-punch-man-portada.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg',
    'https://i.blogs.es/ebfd34/naruto-nuevos-episodios-estreno-septiembre-2023/840_560.jpeg',
    'https://es.web.img3.acsta.net/pictures/210/154/21015404_20130626115836716.jpg'
  ],
  about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Quisquam, voluptatem. Quisquam, voluptatem. Quisquam, voluptatem.'
}

export default function Index () {
  const pins = useRef<HTMLUListElement>(null)
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    if (pins.current?.scrollWidth) {
      setIsScroll(pins.current?.scrollWidth > pins.current?.clientWidth)
    }
  }, [isScroll])

  return (
    <main className={style.profile__container}>
      <div className={style.profile__edit}>
        <Link className='btn-second' href='/profile/aboutme'>Editar perfil</Link>
      </div>
      <div className={style.user}>
        <div className={style.user__content}>
          <div className={style.user__info}>
            <img className={style.user__photo} src={user.photo} alt="User photo" />
            <div className={style.user__details}>
              <h1 className={style.user__name}>{user.name}</h1>
              <h2 className={style.user__location}>{user.location}</h2>
            </div>
          </div>

          <div className={style.user__interests}>
            <h2 className={style['user__interests-title']}>Sus intereses</h2>
            <ul className={style['user__interests-content']}>
              {user.interests.map((interest, index) => (
                <li key={index} className={style.user__interest}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div className={style.user__pins}>
            <h2 className={style['user__pins-title']}>Sus pines</h2>
            <ul className={style['user__pins-content']} ref={pins}>
              {user.pins.map((pin, index) => (
                <li key={index} className={style.user__pin} style={{ background: 'linear-gradient(45deg, rgb(186, 71, 71), rgb(33, 204, 164))' }}>
                  <img className={style['user__pin-photo']} src={pin} alt="User pin" />
                </li>
              ))}
            </ul>
            {isScroll && (
              <div className={style['user__pins-buttons']}>
                <button value='left' onClick={(event) => handleScroll(event, pins)}>
                  <Icons.Arrow width={20} height={20} />
                </button>
                <button value='right' onClick={(event) => handleScroll(event, pins)}>
                  <Icons.Arrow width={20} height={20} />
                </button>
              </div>
            )}
          </div>

          <div className={style.user__about}>
            <h2 className={style['user__about-title']}>Sobre {user.name}</h2>
            <p className={style['user__about-content']}>
              {user.about}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
