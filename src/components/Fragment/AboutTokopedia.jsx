import Button from "../Elements/ButtonFilled";


const AboutTokopedia = () => {
    return (
        <div>
            <AboutHeader/>
            <AboutContent/>
            <AboutFooter/>
            <div className="h-36"></div>
            <div className="w-full h-[1px] bg-grayMedium-0"></div>
            <hr />
        </div>
    )
}

const AboutFooter = () => {
    return (
        <div className="grid grid-cols-3 mx-6 mt-6">
                <div className="">
                    <a href="" className="flex gap-5 w-[300px]">
                        <img src="../../public/img/transparan-about.jpg" alt="" className="w-28 h-28"/>
                        <div className="pt-3">
                            <a className="font-AppBold text-[16px] text-greenTokped-0 pt-10 hover:text-orange-500">Transparant</a>
                            <p className="my-3 font-AppRegular text-[12px] text-grayDark-0">
                                Pembayaran Anda baru diteruskan ke penjual setelah barang Anda terima
                            </p>
                        </div>
                    </a>
                </div>
                <div className="">
                    <a href="" className="flex gap-5 w-[300px]">
                        <img src="../../public/img/aman-about.jpg" alt="" className="w-28 h-28"/>
                        <div className="pt-3">
                            <a className="font-AppBold text-[16px] text-greenTokped-0 pt-10 hover:text-orange-500">Aman</a>
                            <p className="my-3 font-AppRegular text-[12px] text-grayDark-0">
                                Bandingkan review untuk berbagai online shop terpercaya se-Indonesia
                            </p>
                        </div>
                    </a>
                </div>
                <div className="">
                    <a href="" className="flex gap-5 w-[300px]">
                        <img src="../../public/img/fasilitas-about.jpg" alt="" className="w-28 h-28"/>
                        <div className="pt-3">
                            <a className="font-AppBold text-[16px] text-greenTokped-0 pt-10 hover:text-orange-500 ">Fasilitas Escrow Gratis</a>
                            <p className="my-3 font-AppRegular text-[12px] text-grayDark-0">
                                Fasilitas Escrow (Rekening Bersama) Tokopedia tidak dikenakan biaya tambahan
                            </p>
                        </div>
                    </a>
                </div>

            </div>
    )
}
const AboutContent = () => {
    return (
        <div className="mx-6 ">
                <div>
                    <h1 className="font-AppBold text-[14px] text-gray-700 my-3">Nikmati Mudahnya Jualan Online di Tokopedia</h1>
                    <p className="text-grayDark-0 font-AppRegular text-[12px] my-3 leading-relaxed">Tokopedia merupakan salah satu situs jual beli online di Indonesia yang perkembangannya terhitung cepat dan memiliki tujuan untuk memudahkan setiap masyarakat di Indonesia, agar dapat melakukan aneka transaksi jual beli secara online. Selain kamu dapat menikmati proses pembelian aneka produk lebih mudah dan efisien, kamu para seller juga dapat melakukan jualan online di Tokopedia. Kamu bisa bergabung dengan komunitas khusus Tokopedia Seller bagi kamu yang ingin memulai bisnis dan jualan online atau ingin memperluas bisnis yang sedang kamu jalankan. Proses pendaftaran untuk menjadi Tokopedia Seller juga sangat mudah cukup dengan memasukkan data diri, nama toko, alamat toko setelah itu kamu akan langsung terdaftar sebagai Tokopedia Seller. Kamu juga dapat melakukan upgrade akun toko kamu menjadi Power Merchant untuk menjangkau pelanggan Tokopedia yang lebih luas lagi, sehingga bisnis online kamu semakin laris. Keuntungan Power Merchant adalah kamu dapat memberikan fitur Bebas Ongkir sehingga dapat menarik lebih banyak lagi pelanggan, lalu kamu dapat menikmati fitur TopAds yang dapat menjangkau masyarakat pengguna Tokopedia lebih banyak lagi dengan modal yang sangat minim mulai dari Rp 25 ribuan, hingga toko kamu akan tampil lebih menarik lagi serta dapat meningkatkan kepercayaan pembeli. Ayo mulai jualan online di Tokopedia dan mulai kembangkan usahamu secara online bersama Tokopedia.
                    <br/><br/>Tokopedia merupakan salah satu e-commerce di Indonesia yang menawarkan berbagai macam produk dan menjadikannya sebagai marketplace pilihan bagi banyak masyarakat Indonesia. Tidak hanya itu, kehadiran Tokopedia membuat pengalaman belanja online para penggunanya menjadi lebih mudah, aman, dan efisien. Tersedia berbagai fitur dan metode pembayaran yang dapat Anda pilih, untuk memastikan kegiatan belanja Anda dapat dilakukan senyaman mungkin. Baik itu melalui transfer bank yang bisa dilakukan menggunakan rekening dari berbagai bank yang tersedia, uang elektronik seperti OVO, hingga cicilan. Sistem berbelanja di Tokopedia terintegrasi pula dengan sistem beberapa jasa ekspedisi. Kerjasama yang dijalin ini memungkinkan Tokopedia untuk memberikan penawaran pengiriman gratis, dan memungkinkan pengguna yang berbelanja untuk terus melacak status pengiriman produk yang mereka beli. Jadi, produk apapun yang dibeli di Tokopedia baik itu pakaian bayi, aksesoris mobil, aksesoris kamera, celana, jam, hingga peralatan elektronik seperti kabel dan peralatan gaming, atau makanan sekali pun dapat terus Anda lacak keberadaannya untuk memastikan akan sampai dengan aman. Data pribadi dan seluruh transaksi yang sudah maupun yang akan Anda lakukan di Tokopedia dilindungi oleh kebijakan privasi Tokopedia, sehingga tak perlu khawatir data Anda akan jatuh ke pihak yang tidak bertanggungjawab dan/atau disalahgunakan. Karena faktor-faktor tersebut lah, Tokopedia menjadi solusi untuk belanja online dengan mudah dan aman.</p>
                </div>
                <div>
                    <h1 className="font-AppBold text-[14px] text-gray-700 my-3">Belanja Produk-produk Original Di Tokopedia Official Store</h1>
                    <p className="text-grayDark-0 font-AppRegular text-[12px] my-3 leading-relaxed">Tokopedia merupakan platform digital dimana kamu dapat berbelanja setiap kebutuhan pokok kamu sehari-hari dengan cukup menggunakan aplikasi serta koneksi Internet. Kemudahan berbelanja secara online yang disediakan oleh Tokopedia akan sangat membantu kamu menghemat waktu serta tenaga tanpa harus menjalani antrian yang sangat panjang hanya untuk melakukan pembelian produk-produk kebutuhan kamu. Akan tetapi, masih banyak sekali masyarakat yang masih kurang percaya terhadap produk-produk yang disediakan secara online, mulai dari takut ditipu, hingga produk yang tidak original. Kamu tidak perlu takut saat berbelanja di Tokopedia, demi meningkatkan kepercayaan masyarakat, Tokopedia menghadirkan Official Store, yang menyediakan aneka produk-produk dengan kualitas original serta mendapatkan garansi resmi 7 hari dari Tokopedia! Kamu bisa mendapatkan produk kebutuhan pokok di Tokopedia Official Store seperti produk pakaian seperti dari toko Berrybenka yang menyediakan pakaian Outerwear (Cardigan, Blazer), Blouse, Scarf Wanita, Dress & Jumpsuit, hingga Basic Shirt yang cocok digunakan untuk wanita, lalu produk aksesoris Fashion seperti Tas Backpack, Tas Selempang, dan Pouch dari Eiger yang menyediakan aneka tas yang sangat cocok dipadukan dengan fashion ataupun bagi kamu yang sangat menyukai wisata alam seperti Camping di daerah perbukitan untuk membawa beragam kebutuhan kamu. Kurang lengkap jika produk Fashion tidak ditemani dengan Sepatu. Tokopedia Official Store juga memiliki berbagai toko Sepatu lokal yang tentunya berkualitas seperti Brodo dari kota Bandung yang menjual sepatu dengan material Leather, cocok untuk dipakai saat bekerja atau menghadiri acara formal. Kamu ingin mendapatkan kebutuhan elektronik juga? Tokopedia Official Store juga tidak lupa menghadirkan aneka Smartphone beserta kebutuhannya seperti Sim-Card mulai dari brand Realme, Oppo, dan Smartfren yang menyediakan eSim-card atau SIM Card Digital tanpa harus memasukkan sim-card fisik ke dalam Smartphone. Tokopedia menjual aneka Smartphone premium lainnya yang disediakan secara original dan lengkap di Official Store, jadi kamu tidak harus lagi berbelanja Smartphone diluar rumah hanya cukup menggunakan aplikasi Tokopedia Official Store. Alat elektronik lainnya yang bisa kamu dapatkan seperti Laptop Gaming di Official Store Tokopedia dengan mengunjungi MSI yang memiliki spesifikasi tinggi, lalu Epson untuk mendapatkan printer berkualitas dengan teknologi Laser Printing. Kamu juga dapat menggunakan Tokopedia Official Store untuk berbelanja aneka kendaraan motor beserta suku cadangnya, contohnya seperti Kawasaki di Tokopedia Official Store yang menyediakan produk motor seperti Kawasaki Ninja untuk motor sport dan Kawasaki D-tracker untuk motor offroad. Masih kurang? Di Tokopedia Official Store juga terdapat toko serbaguna yang sangat terkenal di Indonesia yang kini menghadirkan tokonya agar kamu dapat berbelanja kebutuhan lainnya secara online yaitu Miniso. Selain itu, kamu juga dapat menikmati aneka ragam voucher dari Tokopedia Official Store saat berbelanja produk-produk original agar belanja kamu semakin hemat dan menguntungkan setiap harinya. Mulai dari Voucher Cashback dengan Cashback dalam bentuk OVO Points hingga ratusan ribu rupiah, Voucher Bebas Ongkir hingga puluhan ribu rupiah, akan selalu menemani kamu berbelanja dengan hemat dan menguntungkan. Kamu juga dapat mengikuti promo-promo dari Official Store seperti Promo Diskon dengan potongan harga s.d 50%. Yuk, gunakan segera aplikasi Tokopedia untuk berbelanja produk-produk Original dan berkualitas di Official Store, serta gunakan voucher-voucher dari Official Store untuk mendapatkan pengalaman belanja yang hemat serta menguntungkan setiap harinya.</p>
                </div>
                <div>
                    <h1 className="font-AppBold text-[14px] text-gray-700 my-3">Kerjasama Tokopedia Dengan Berbagai Penjual Lokal dan Brand Ternama</h1>
                    <p className="text-grayDark-0 font-AppRegular text-[12px] my-3 leading-relaxed">
                    Tokopedia termasuk toko online yang banyak diminati masyarakat karena produk yang ditawarkan begitu banyak, penjualnya pun tersedia dari berbagai daerah di seluruh Indonesia. Dengan begini, Tokopedia tidak hanya memudahkan para konsumen dan pengguna yang memiliki kebutuhan untuk berbelanja, tetapi juga banyak penjual di Indonesia yang memiliki keinginan untuk mengembangkan bisnis mereka. Memanfaatkan toko online seperti Tokopedia tidak hanya membuat usaha para penjual lebih berkembang, tetapi juga menghubungkan penjual dengan lebih banyak konsumen dari berbagai lapisan dan daerah melalui cara yang sangat mudah dan sederhana. Selain dengan pemilik usaha pribadi, mulai tahun 2019 ini Tokopedia juga menjalin kerjasama bersama dengan banyak brand agar mereka memiliki official store mereka masing-masing secara resmi. Beberapa official store yang sudah bergabung saat ini ada Samsung, Xiaomi, Gramedia, Wardah, dan masih banyak lagi. Membeli produk resmi langsung dari official store-nya tentu saja dapat dijamin keaslian produknya dan juga kualitas yang ditawarkan. Belanja online dari official store juga dapat memberikan Anda jaminan garansi dan tawaran harga terbaik, karena para brand yang menawarkan voucher dan diskon terbaik bagi pembelinya. Ada pula brand sepatu lokal yang sedang diminati masyarakat Indonesia saat ini yaitu Sepatu Compass, yang menjual produk sneakers andalannya seperti sepatu compass gazelle dan sepatu compass vintage 98 secara eksklusif di Tokopedia melalui official store sepatu compass. Membeli produk resmi langsung dari official store-nya tentu saja dapat dijamin keaslian produknya dan juga kualitas yang ditawarkan. Belanja online dari official store juga dapat memberikan Anda jaminan garansi dan tawaran harga terbaik, karena para brand yang menawarkan voucher dan diskon terbaik bagi pembelinya.
                    <br></br> <br></br>
                    Sebagai situs jual beli online yang sangat terpercaya dan memiliki produk terlengkap di Indonesia. Tokopedia menjadi salah satu toko online dengan banyak peminat dari berbagai kalangan usia di masyarakat. Selain karena lengkap, produk-produk yang dijual di Tokopedia juga sangat terjamin kualitasnya. Karena dijual oleh para seller online yang terpercaya yang berada di lokasi terdekat dan tersebar di berbagai daerah di Indonesia. Sehingga, para konsumen setia Tokopedia bisa dengan mudah menikmati kepraktisan berbelanja secara online. Mudahnya berbelanja di situs jual beli terlengkap ini juga didukung lewat ekspansi atau perluasan kerjasama. Karena kini di Tokopedia, hadir secara online official store dengan aneka brand agar kenyamanan dan kepuasan berbelanja para konsumen semakin terjamin. Dan dikategorikan berdasarkan brand sesuai dengan bentuk produk yang dijualnya. Seperti salah satu brand ternama yang menjual aneka produk pakaian dan pernak pernik lucu Miniso, yang sudah sangat dikenal oleh masyarakat Indonesia. Saat ini, sudah tersedia banyak sekali brand ternama yang hadir di Tokopedia sebagai official store secara variatif. Tidak hanya pakaian, karena kini kamu bisa mendapatkan berbagai jenis perangkat elektronik yang canggih dan terbaru melalui hadirnya berbagai official store produsen gadget-gadget canggih. Baik yang berupa smartphone, maupun produk laptop untuk menunjang berbagai aktivitas.
                    <br></br> <br></br>
                    Mulai dari Oppo sebagai salah satu merk atau brand smartphone ternama yang saat ini memiliki banyak peminat di Indonesia. Sebagai brand yang berasal dari negeri Tiongkok ini, pamornya di Indonesia mulai membayangi produsen-produsen smartphone lainnya. Hal ini disebabkan oleh harganya yang sangat terjangkau dan juga kualitasnya yang mampu bersaing di pasaran dengan sangat kompetitif. Masyarakat Indonesia juga seringkali menjadikan produk smartphone Oppo sebagai alternatif dari produk smartphone dengan spesifikasi serupa merk lain yang harganya bisa jauh di atas harga smartphone keluaran Oppo. Produsen yang hadir di Indonesia sejak April 2013 ini memang sudah memperkenalkan diri di Indonesia melalui produk Oppo Find 5 saat itu. Jika saat itu smartphone produksi Tiongkok sedang trend dengan spesifikasi seadanya yang terkesan copy-paste, Oppo hadir dengan desain yang elegan dan fitur-fitur menarik. Sampai saat ini, anda bisa mendapatkan berbagai produk smartphone keluaran Oppo dengan keaslian dan kualitas yang terjamin. Tentunya melalui online official store produsen ternama ini di Tokopedia.
                    <br></br> <br></br>
                    Selain oppo, kehadiran online official store merk Vivo di Tokopedia juga membuat belanja smartphone terbaru di Tokopedia lebih banyak pilihannya. Produsen smartphone yang juga berasal dari Tiongkok ini mulai masuk ke Indonesia pada tahun 2014 silam juga mendapat animo yang sangat positif di masyarakat. Karena kualitas dan fitur-fitur yang dihadirkan pada setiap produknya juga mampu bersaing dengan baik dengan produsen-produsen handphone ternama lainnya. Baik Oppo maupun Vivo, keduanya adalah smartphone berbasis Android yang saat ini memiliki posisi teratas pengguna di dunia. Segala produk smartphone terbaru yang berkualitas bisa anda dapatkan di Tokopedia, lewat kemudahan berbelanja secara online. Dan tentunya, belanja lebih terpercaya dan aman melalui official store berbagai merk handphone yang hadir di Tokopedia saat ini.
                    <br></br> <br></br>
                    Tidak hanya produk perangkat ponsel pintar atau canggih, kebutuhan akan komputer personal juga bisa semakin ditingkatkan. Karena kini, online official store Asus, HP, Acer dan berbagai merk produsen ternama komputer lainnya juga hadir di situs jual beli terpercaya ini. Melalui berbagai produk komputer yang canggih dan berbagai pilihan jenis yang variatif. Seperti misalnya laptop yang bisa menunjang berbagai aktivitas dan kegiatan sehari-hari anda. Selain itu, laptop juga tentunya bisa digunakan untuk berbagai kegiatan yang menyenangkan. Seperti laptop dengan spesifikasi dan fitur yang sesuai untuk digunakan bermain video game. Atau mungkin digunakan untuk membuat desain-desain kreatif dan editing file multimedia tanpa takut lemot. Tidak hanya laptop dan komputer personal, aneka produsen ternama tersebut juga menghadirkan Tablet PC yang tidak kalah canggihnya. Seperti produk Asus Zenpad 7 atau Acer Iconia one yang sama-sama memiliki keunggulan masing-masing, sehingga kamu bisa memilih produk mana yang paling cocok sesuai dengan kebutuhan.
                    <br></br> <br></br>
                    Berbelanja aneka produk perangkat canggih di situs jual beli online Tokopedia kini semakin nyaman. Karena membeli produk resmi langsung melalui official store-nya tentu saja dapat menjamin kualitas produk dan mendapatkan produk yang terjamin asli. Selain itu, anda juga bisa mendapatkan jaminan garansi resmi dan penawaran harga terbaik sesuai dengan yang berlaku di pasaran. Karena para brand terkemuka yang hadir melalui official store di Tokopedia menawarkan voucher dan diskon terbaik bagi pembelinya. Selain itu, belanja di Tokopedia juga bisa memberikan banyak keuntungan lainnya. Karena anda juga bisa menikmati promo bebas ongkos kirim atau promo cashback pada berbagai official store atau produk terpilih. kini memenuhi segala kebutuhan komunikasi dan informasi bisa dilakukan dengan lebih mudah, karena berbagai official store produsen handphone dan komputer ternama sudah hadir di Tokopedia. Ayo tunggu apalagi, temukan juga promo yang tidak kalah menarik di halaman kolaborasi anak bangsa hanya di Tokopedia.
                    </p>
                </div>
                <div>
                    <h1 className="font-AppBold text-[14px] text-gray-700 my-3">Temukan Berbagai Pelayanan Menarik Lainnya Hanya di Tokopedia</h1>
                    <p className="text-grayDark-0 font-AppRegular text-[12px] my-3 leading-relaxed">
                    Di Tokopedia kamu juga tidak perlu khawatir lagi soal keamanannya, karena Tokopedia menyediakan asuransi perlindungan untuk setiap barang yang kamu beli di Tokopedia. Selain asuransi belanja dan tagihan, kamu juga bisa mengajukan asuransi travel, kendaraan, hingga proteksi pinjaman dengan cukup mengisi formulir data diri dari aplikasi Tokopedia.
                    <br></br> <br></br>
                    Tidak hanya itu, kamu juga bisa mengajukan kartu kredit di beberapa bank yang bekerja sama dengan Tokopedia. Dengan persyaratan yang mudah dan proses yang cepat, kamu sudah bisa membuat kartu kredit yang disediakan UOB (United Overseas Bank), Citibank hingga MNC Bank. Keuntungan membuat kartu kredit di Tokopedia adalah semua proses dilakukan secara online, tidak perlu mengantri, tanpa biaya administrasi apapun. Kerahasiaan data dijamin dan kamu juga bisa mendapatkan welcome gift card Tokopedia hingga 300 ribu.
                    <br></br> <br></br>
                    Kamu juga bisa mengajukan pinjaman online di Tokopedia untuk modal usaha, karyawan, pendidikan, pinjaman agunan BPKB, dan juga dana instan untuk kamu yang butuh dana kurang dari 24 jam. Tokopedia bekerja sama dengan Adira Finance, BFI Finance, dan Julo yang sudah diawasi oleh Otoritas Jasa Keuangan (OJK) yang memastikan pinjamanmu legal dan aman. Cukup menyisihkan waktu kurang dari 5 menit untuk mengisi formulir yang disediakan, pinjamanmu akan langsung diproses tanpa ribet.
                    <br></br> <br></br>
                    Kalau kamu enggan untuk menghabiskan uangmu di tengah masa pandemi ini, kamu juga bisa memilih menabung di Tokopedia, loh! Tokopedia punya fitur investasi untuk memfasilitasi kamu yang ingin menabung dengan aman tanpa harus pergi ke Bank. Ada dua pilihan investasi yang bisa kamu lakukan di Tokopedia, yaitu Reksa dana dan Tabungan Emas.
                    <br></br> <br></br>
                    Investasi Reksa dana di Tokopedia bekerja sama dengan Bareksa yang prosesnya cepat dan keamanannya terjamin. Proses pencairan reksa dana di Tokopedia dapat dilakukan secara instan dan tanpa dipungut biaya admin. Pendaftarannya pun hanya membutuhkan waktu lima menit saja. Reksa dana Tokopedia sangat mudah dimengerti dan dijalankan, sangat cocok untuk pemula yang baru belajar untuk berinvestasi sebelum bermain di pasar saham.
                    <br></br> <br></br>
                    Atau kamu bisa investasi emas yang diawasi oleh Pegadaian Indonesia. Terdapat banyak fitur unggulan mulai dari jual beli instan, misi emas, kado emas, hingga langganan. Semua investasi kamu dijamin aman dan terpercaya karena diawasi langsung oleh Otoritas Jasa Keuangan (OJK). Dengan berinvestasi di Tokopedia, kamu bisa terhindar dari penipuan investasi dan investasi bodong lainnya yang sangat merugikan.
                    <br></br> <br></br>
                    Tidak berhenti sampai di situ saja, Tokopedia juga menyediakan berbagai macam produk digital untuk menunjang kebutuhan liburanmu. Sebelum bepergian ke daerah yang ingin dituju, ada baiknya kamu menyiapkan keperluan liburanmu dengan matang.
                    <br></br> <br></br>
                    Kini, kamu tidak perlu ribet cari dan pesan tiket pesawat karena hampir semua rute penerbangan tersedia di Tokopedia. Bukan hanya pesawat, sarana lain seperti kereta api dengan aneka rute perjalanan juga bisa kamu pesan dengan mudah di sini. Dapatkan juga berbagai potongan harga dan promo menarik yang tentunya menguntungkan untuk kamu!
                    <br></br> <br></br>
                    Lengkapi juga liburanmu dengan booking hotel secara online dan praktis melalui Tokopedia. Tersedia beragam pilihan hotel sesuai tipe akomodasi yang diinginkan dan budget yang dimiliki, mulai dari hotel, apartemen, guest house, hingga villa semua dapat kamu pesan hanya dengan beberapa klik saja melalui layar browser atau handphone-mu. Jangan lewatkan juga beragam promo hotel menarik pada waktu tertentu yang cuma bisa kamu dapatkan di Tokopedia!
                    <br></br> <br></br>
                    Bagi kamu yang ingin mengisi waktu liburan dengan mengunjungi berbagai tempat bermain atau event-event seru lainnya, kini semua itu juga bisa kamu dapatkan di Tokopedia. Contohnya saja seperti tiket masuk Bali Zoo, Dufan, waterboom, hingga tiket acara konser Jazz Goes To Campus bisa kamu pesan secara cepat dan praktis. Kamu bisa langsung cek dan beli tiket event serta aneka promo taman bermain di kalender event yang yang telah disediakan. Selain event, kamu juga bisa beli beragam food & voucher yang dapat digunakan untuk aneka gerai makanan hingga outlet pakaian favoritmu. Tidak ketinggalan buat para gamers, Tokopedia juga menawarkan variasi pilihan voucher game seru seperti Mobile Legend, PUBG, Free Fire, dan masih banyak lagi.
                    <br></br> <br></br>
                    Selama liburan, kamu juga tidak perlu pusing memikirkan segala tanggungan maupun kebutuhan sehari-hari yang harus dipenuhi. Tokopedia menyediakan layanan pembayaran tagihan listrik dan isi ulang token PLN dengan berbagai metode pembayaran. Pulsa atau paket data internet habis saat sedang asyik liburan? Dengan menggunakan Tokopedia, kamu bisa bebas pilih dan isi ulang pulsa serta paket data kapan dan di mana saja!
                    </p>
                </div>
            </div>
    )
}
const AboutHeader = () => {
    return (
        <div className="mx-6 mt-5 border-dotted border-b-2">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="font-AppBold text-[16px] text-orange-500">Punya Toko Online? Buka cabangnya di Tokopedia</h1>
                        <p className="text-grayDark-0 font-AppRegular text-[12px] my-5">Mudah, nyaman dan bebas Biaya Layanan Transaksi. <span className="font-AppBold text-grayDark-0">GRATIS!</span></p>
                        <div className="flex gap-2 items-baseline my-6">
                            <Button text="Buka Toko GRATIS" variant="bg-greenTokped-0 text-white px-4 py-3 text-[12px]"></Button>
                            <a href="" className="hover:text-orange-500 font-AppBold text-[12px] text-greenTokped-0">Pelajari lebih lanjut</a>
                        </div>
                    </div>
                    <div>
                        <img src="../../public/img/IMGTokped-1.jpg" className="h-32"></img>
                    </div>
                </div>
            </div>
    )
}

export default AboutTokopedia;