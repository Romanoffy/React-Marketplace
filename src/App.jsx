
// import Footer from './components/Footer'
import { useState } from 'react'
import Header from './components/Header'
import { SpinWheel } from "react-spin-wheel"
import "react-spin-wheel/dist/index.css"
import swal from 'sweetalert'

const App = () => {
  const [item, setItem] = useState([
    "AUREL",
    "NABILAH",
    "PUTRI",
    "JOEL",
    "LUTFI",
    "HANZEL",
    "MUTIA",
    "ANGGA",
    "RAIHAN",
    "RIZAL",
    "BRAMA",
    "VINZE",
    "REZKI",
    "IGOR",
    "NAUFAL",
    "GHATAN",
    "NABIL",
    "RIFANDI",
    "DINAND",
    "SULTHAN",
    "SATRIA",
    "ANANDA",
    "FACHRI",
    "RAZWA",
    "AFRIZAL",
    "FAHMI",
    "ABDILLAH"
  ])
  const [married, setMarried] = useState([])

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h3 className='text-center'>Siapakah Kelas XI PPLG I SMK PI yang menikah duluan?</h3>
        <SpinWheel
          items={item}
          onFinishSpin={(items) => {
            swal({
              title: "Selamat Menempuh hidup baru!",
              text: `Semoga ${items} menjadi keluarga sakinah, mawaddah dan warrohmah nu penting mah ngeunah!`,
              icon: "success",
              button: "Jangan lupa undang-undang kita yaa!",
            }).then(() => {
              setItem(item.filter(f => f !== items))
              setMarried([...married, items])
            })
          }}
        />

        <h2 className='text-center'>List yang nikah duluan!</h2>
        <div className="table-responsive">
          <table className='table'>
            <thead>
              <tr>
                <th>NO</th>
                <th>Nama</th>
              </tr>
            </thead>
            <tbody>
              {
                married?.length === 0 ? <tr>
                  <td colSpan={2}>Belum ada yang nikah!</td>
                </tr> : married?.map((m, idx) => <tr key={idx}>
                  <td >{idx + 1}</td>
                  <td >{m}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
