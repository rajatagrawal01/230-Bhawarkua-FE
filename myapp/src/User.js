// export default function User(props) {
//     console.log(props);
    
//   return (
//     <div>
//         <h1>User Detail</h1>
//         <h2>{props.name}</h2>
//         <h2>{props.mob}</h2>
//         <h2>{props.city}</h2>
//     </div>
//   )
// }

export default function User({name,city,mob}) {
    
  return (
    <div>
        <h1>User Detail</h1>
        <h2>{name}</h2>
        <h2>{mob}</h2>
        <h2>{city}</h2>
    </div>
  )
}
