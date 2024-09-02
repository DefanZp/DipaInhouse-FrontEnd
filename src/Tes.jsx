
function Kelulusan () {

    const nilaiUjian=80;
    const nilaiAbsensi=80;
    const lulus=(nilaiUjian >=80 && nilaiAbsensi >=80);
    const lanjut=lulus;
    const tinggalKelas=!lulus;

    return (
        <div>
        {lulus ? <h1>Lulus</h1> : <h1>Tidak lulus</h1>}
        {lanjut && <p>Selamat anda lulus</p>}
        {tinggalKelas && <p>Mohon maaf anda harus tinggal kelas</p>}  
        </div>
    );
}

export default Kelulusan