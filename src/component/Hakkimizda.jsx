function Hakkimizda() {
  const resimler = ["img/cook.jpg"];
  return (
    <>
      <img className="aciklamaResim" src={resimler} />
      <div className="aciklama">
        <p>
          2024 yılında kurulan Melih Restaurant açıldığı günden itibaren özel
          lezzetleri, deneyimli şef kadrosu ve gösterişli atmosferiyle siz
          değerli müşterilerimizin hizmetinde. Türk ve dünya mutfağından seçkin
          örnekler Melih Restaurant'da sizi bekliyor.
        </p>
      </div>
    </>
  );
}

export default Hakkimizda;
