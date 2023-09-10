import React from 'react'
import Card from '../atoms/Card'

const Db = [
  {
    id: 1,
    img: "https://f.fcdn.app/imgs/b35f84/www.lacancha.uy/lcanuy/f6cd/webp/catalogo/DV6842_100_1/800x800/nike-air-max-sc-ess-style-nike-air-max-sc-ess-style.jpg",
    title:"Nike Air Max Sc Ess Style",
    price:"UYU 4.990",
  },
  {
    id: 2,
    img: "https://f.fcdn.app/imgs/2f6334/www.lacancha.uy/lcanuy/46d5/webp/catalogo/CZ5358_002_1/800x800/nike-air-max-sc-nike-air-max-sc.jpg",
    title:"Nike Air Max Sc",
    price:"UYU 4.790",
  },
  {
    id: 3,
    img: "https://f.fcdn.app/imgs/c4ef81/www.lacancha.uy/lcanuy/2b73/webp/catalogo/DH2987_005_1/800x800/nike-court-vision-low-nike-court-vision-low.jpg",
    title:"Nike Court Vision Low",
    price:"UYU 4.790",
  },
  {
    id: 4,
    img: "https://f.fcdn.app/imgs/696500/www.lacancha.uy/lcanuy/7278/webp/catalogo/BQ5448_405_1/800x800/nike-court-borough-low-2-nike-court-borough-low-2.jpg",
    title:"Nike Court Borough Low 2",
    price:"UYU 3.990",
  },
  {
    id: 5,
    img: "https://f.fcdn.app/imgs/583210/www.lacancha.uy/lcanuy/ed0d/webp/catalogo/DH3162_002_1/800x800/nike-court-legacy-nike-court-legacy.jpg",
    title:"Nike Court Legacy",
    price:"UYU 4.990",
  },
  {
    id: 6,
    img: "https://f.fcdn.app/imgs/8d8a9b/www.lacancha.uy/lcanuy/4888/webp/catalogo/AR4162_600_1/800x800/nike-pico-5-nike-pico-5.jpg",
    title:"Nike Pico 5",
    price:"UYU 2.490",
  },
  {
    id: 7,
    img: "https://f.fcdn.app/imgs/32f7d8/www.lacancha.uy/lcanuy/1e14/webp/catalogo/DH0606_006_1/800x800/nike-renew-retaliation-4-nike-renew-retaliation-4.jpg",
    title:"Nike Renew Retaliation 4",
    price:"UYU 5.290",
  },
  {
    id: 8,
    img: "https://f.fcdn.app/imgs/cf6ee2/www.lacancha.uy/lcanuy/7edb/webp/catalogo/DO9328_003_1/800x800/nike-metcon-8-nike-metcon-8.jpg",
    title:"Nike Metcon 8",
    price:"UYU 8.690",
  },
  {
    id: 9,
    img: "https://f.fcdn.app/imgs/256aa9/www.lacancha.uy/lcanuy/5305/webp/catalogo/DV3854_102_1/800x800/nike-air-zoom-pegasus-40-nike-air-zoom-pegasus-40.jpg",
    title:"Nike Air Zoom Pegasus 40",
    price:"UYU 8.690",
  },  
]

const CardsList = () => {
  return (
    <section>
      {
        Db.map(card => <Card
          key={card.id}
          data={card}
        />)
      }
      <style jsx>{`
      section{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3,1fr);
        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(2,1fr);
        };
      @media screen and (max-width: 480px) {
          grid-template-columns: repeat(1,1fr);
        };
      `}</style>
    </section>
  )
}

export default CardsList

