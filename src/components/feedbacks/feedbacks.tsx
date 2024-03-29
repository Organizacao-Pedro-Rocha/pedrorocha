import { useState } from "react"
import styles from "./feedbacks.module.scss"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation, Pagination } from "swiper"

interface feedbacksInterface {
  name: string
  objective: string
  photo: string
}

export function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<feedbacksInterface[]>([
    {
      name: "Clauber Codonho",
      objective: "Emagrecimento e ganho de massa muscular",
      photo: "/images/ClauberCodonho.jpeg"
    },
    {
      name: "Jonathan Ferreira",
      objective: "Ganho de massa",
      photo: "/images/JonathanFerreira.jpeg"
    },
    {
      name: "Ramon",
      objective: "Prática da calistenia e ganho de massa",
      photo: "/images/Antonio.jpeg"
    },
    {
      name: "Luiza",
      objective: "",
      photo: "/images/moça1.jpg"
    },
    {
      name: "Renata",
      objective: "",
      photo: "/images/moça2.jpg"
    },
    {
      name: "Marcos",
      objective: "",
      photo: "/images/carinha1.jpg"
    },
    {
      name: "André ",
      objective: "",
      photo: "/images/carinha2.jpg"
    },
    {
      name: "Caroline",
      objective: "",
      photo: "/images/moça3.jpg"
    }
  ])

  return (
    <section className={styles.feedbacks_section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.feedbacks_major_content}>
              <h3>Feedbacks</h3>

              <Swiper
                navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  }
                }}
                className="mySwiper"
              >
                {feedbacks.map(({ name, objective, photo }, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={styles.card} key={i}>
                        <div className={styles.card_front}>
                          <img src={photo} alt="" />
                        </div>
                        <div className={styles.card_back}>
                          <div>
                            <h5>Nome</h5>
                            <span>{name}</span>
                          </div>
                          {objective != "" ? (
                            <div>
                              <h5>Objetivo</h5>
                              <span>{objective}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              <div className={styles.cotainer_buttons}>
                <button id="swiper-back" className={styles.back_swiper_button}>
                  <IoIosArrowDropleftCircle />
                </button>
                <button id="swiper-forward" className={styles.next_swiper_button}>
                  <IoIosArrowDroprightCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
