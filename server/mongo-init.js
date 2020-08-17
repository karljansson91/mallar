db.createUser( { 
    user: "finance_be",
    pwd: "karl123",
    roles: [
        {
            role: 'readWrite',
            db: 'data'
        }
    ]
})
db.symbols.createIndex({ "$**": "text" })
db.symbols.insertMany([
  {
    "name": "N/A",
    "displaySymbol": "24SEVE.ST",
    "symbol": "24SEVE.ST"
  },
  {
    "name": "AAK AB (publ)",
    "displaySymbol": "AAK.ST",
    "symbol": "AAK.ST"
  },
  {
    "name": "ABB Ltd.",
    "displaySymbol": "ABB.ST",
    "symbol": "ABB.ST"
  },
  {
    "name": "AcadeMedia AB",
    "displaySymbol": "ACAD.ST",
    "symbol": "ACAD.ST"
  },
  {
    "name": "Acando AB",
    "displaySymbol": "ACAN-B.ST",
    "symbol": "ACAN-B.ST"
  },
  {
    "name": "Active Biotech AB",
    "displaySymbol": "ACTI.ST",
    "symbol": "ACTI.ST"
  },
  {
    "name": "Addtech AB",
    "displaySymbol": "ADDT-B.ST",
    "symbol": "ADDT-B.ST"
  },
  {
    "name": "AF Poyry AB",
    "displaySymbol": "AF-B.ST",
    "symbol": "AF-B.ST"
  },
  {
    "name": "Agromino A/S",
    "displaySymbol": "AGRO.ST",
    "symbol": "AGRO.ST"
  },
  {
    "name": "Ahlsell AB (publ)",
    "displaySymbol": "AHSL.ST",
    "symbol": "AHSL.ST"
  },
  {
    "name": "Alfa Laval AB",
    "displaySymbol": "ALFA.ST",
    "symbol": "ALFA.ST"
  },
  {
    "name": "AddLife AB",
    "displaySymbol": "ALIF-B.ST",
    "symbol": "ALIF-B.ST"
  },
  {
    "name": "Alimak Group AB (publ)",
    "displaySymbol": "ALIG.ST",
    "symbol": "ALIG.ST"
  },
  {
    "name": "Autoliv Inc. SWEDDR",
    "displaySymbol": "ALIV-SDB.ST",
    "symbol": "ALIV-SDB.ST"
  },
  {
    "name": "Ahlstrom-Munksjo Oyj",
    "displaySymbol": "AM1S.ST",
    "symbol": "AM1S.ST"
  },
  {
    "name": "Ambea AB (publ)",
    "displaySymbol": "AMBEA.ST",
    "symbol": "AMBEA.ST"
  },
  {
    "name": "Addnode Group AB (publ)",
    "displaySymbol": "ANOD-B.ST",
    "symbol": "ANOD-B.ST"
  },
  {
    "name": "Anoto Group AB",
    "displaySymbol": "ANOT.ST",
    "symbol": "ANOT.ST"
  },
  {
    "name": "Africa Oil Corp",
    "displaySymbol": "AOI.ST",
    "symbol": "AOI.ST"
  },
  {
    "name": "AQ Group AB",
    "displaySymbol": "AQ.ST",
    "symbol": "AQ.ST"
  },
  {
    "name": "ARIONBANKI/SDR",
    "displaySymbol": "ARION-SDB.ST",
    "symbol": "ARION-SDB.ST"
  },
  {
    "name": "Arise AB",
    "displaySymbol": "ARISE.ST",
    "symbol": "ARISE.ST"
  },
  {
    "name": "Arjo AB (publ)",
    "displaySymbol": "ARJO-B.ST",
    "symbol": "ARJO-B.ST"
  },
  {
    "name": "ARCTIC PAPER SA",
    "displaySymbol": "ARP.ST",
    "symbol": "ARP.ST"
  },
  {
    "name": "ASSA ABLOY AB",
    "displaySymbol": "ASSA-B.ST",
    "symbol": "ASSA-B.ST"
  },
  {
    "name": "Atlas Copco AB Class A",
    "displaySymbol": "ATCO-A.ST",
    "symbol": "ATCO-A.ST"
  },
  {
    "name": "Atlas Copco AB Class B",
    "displaySymbol": "ATCO-B.ST",
    "symbol": "ATCO-B.ST"
  },
  {
    "name": "Actic Group AB",
    "displaySymbol": "ATIC.ST",
    "symbol": "ATIC.ST"
  },
  {
    "name": "Alligator Bioscience AB",
    "displaySymbol": "ATORX.ST",
    "symbol": "ATORX.ST"
  },
  {
    "name": "A3 AllmaITochTelekomaktiebolaget(publ)",
    "displaySymbol": "ATRE.ST",
    "symbol": "ATRE.ST"
  },
  {
    "name": "Atrium Ljungberg AB",
    "displaySymbol": "ATRLJ-B.ST",
    "symbol": "ATRLJ-B.ST"
  },
  {
    "name": "Attendo AB (publ)",
    "displaySymbol": "ATT.ST",
    "symbol": "ATT.ST"
  },
  {
    "name": "Axfood AB",
    "displaySymbol": "AXFO.ST",
    "symbol": "AXFO.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "AYIMA.ST",
    "symbol": "AYIMA.ST"
  },
  {
    "name": "Avanza Bank Holding AB",
    "displaySymbol": "AZA.ST",
    "symbol": "AZA.ST"
  },
  {
    "name": "AstraZeneca plc",
    "displaySymbol": "AZN.ST",
    "symbol": "AZN.ST"
  },
  {
    "name": "B3 Consulting Group AB (publ)",
    "displaySymbol": "B3.ST",
    "symbol": "B3.ST"
  },
  {
    "name": "Bactiguard Holding AB",
    "displaySymbol": "BACTI-B.ST",
    "symbol": "BACTI-B.ST"
  },
  {
    "name": "Balco Group AB",
    "displaySymbol": "BALCO.ST",
    "symbol": "BALCO.ST"
  },
  {
    "name": "Fastighets AB Balder",
    "displaySymbol": "BALD-B.ST",
    "symbol": "BALD-B.ST"
  },
  {
    "name": "BE Group AB (publ)",
    "displaySymbol": "BEGR.ST",
    "symbol": "BEGR.ST"
  },
  {
    "name": "Beijer Alma AB",
    "displaySymbol": "BEIA-B.ST",
    "symbol": "BEIA-B.ST"
  },
  {
    "name": "Beijer Ref AB (publ)",
    "displaySymbol": "BEIJ-B.ST",
    "symbol": "BEIJ-B.ST"
  },
  {
    "name": "Beijer Electronics Group AB",
    "displaySymbol": "BELE.ST",
    "symbol": "BELE.ST"
  },
  {
    "name": "Bergman \u0026 Beving AB",
    "displaySymbol": "BERG-B.ST",
    "symbol": "BERG-B.ST"
  },
  {
    "name": "Besqab AB (publ)",
    "displaySymbol": "BESQ.ST",
    "symbol": "BESQ.ST"
  },
  {
    "name": "Better Collective A/S",
    "displaySymbol": "BETCO.ST",
    "symbol": "BETCO.ST"
  },
  {
    "name": "Betsson AB",
    "displaySymbol": "BETS-B.ST",
    "symbol": "BETS-B.ST"
  },
  {
    "name": "Bygghemma Group First AB",
    "displaySymbol": "BHG.ST",
    "symbol": "BHG.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "BIBB.ST",
    "symbol": "BIBB.ST"
  },
  {
    "name": "Bilia AB",
    "displaySymbol": "BILI-A.ST",
    "symbol": "BILI-A.ST"
  },
  {
    "name": "BillerudKorsnas AB (publ)",
    "displaySymbol": "BILL.ST",
    "symbol": "BILL.ST"
  },
  {
    "name": "BioInvent International AB",
    "displaySymbol": "BINV.ST",
    "symbol": "BINV.ST"
  },
  {
    "name": "BioArctic AB",
    "displaySymbol": "BIOA-B.ST",
    "symbol": "BIOA-B.ST"
  },
  {
    "name": "BioGaia AB",
    "displaySymbol": "BIOG-B.ST",
    "symbol": "BIOG-B.ST"
  },
  {
    "name": "Biotage AB",
    "displaySymbol": "BIOT.ST",
    "symbol": "BIOT.ST"
  },
  {
    "name": "Byggmax Group AB",
    "displaySymbol": "BMAX.ST",
    "symbol": "BMAX.ST"
  },
  {
    "name": "Boliden AB",
    "displaySymbol": "BOL.ST",
    "symbol": "BOL.ST"
  },
  {
    "name": "Bonava AB (publ) Class A",
    "displaySymbol": "BONAV-A.ST",
    "symbol": "BONAV-A.ST"
  },
  {
    "name": "Bonava AB (publ) Class B",
    "displaySymbol": "BONAV-B.ST",
    "symbol": "BONAV-B.ST"
  },
  {
    "name": "Bonesupport Holding AB",
    "displaySymbol": "BONEX.ST",
    "symbol": "BONEX.ST"
  },
  {
    "name": "Bong AB",
    "displaySymbol": "BONG.ST",
    "symbol": "BONG.ST"
  },
  {
    "name": "Boozt AB",
    "displaySymbol": "BOOZT.ST",
    "symbol": "BOOZT.ST"
  },
  {
    "name": "Bjorn Borg AB",
    "displaySymbol": "BORG.ST",
    "symbol": "BORG.ST"
  },
  {
    "name": "Boule Diagnostics AB",
    "displaySymbol": "BOUL.ST",
    "symbol": "BOUL.ST"
  },
  {
    "name": "Bravida Holding AB",
    "displaySymbol": "BRAV.ST",
    "symbol": "BRAV.ST"
  },
  {
    "name": "Bergs Timber AB (publ)",
    "displaySymbol": "BRG-B.ST",
    "symbol": "BRG-B.ST"
  },
  {
    "name": "Brinova Fastigheter AB (publ)",
    "displaySymbol": "BRIN-B.ST",
    "symbol": "BRIN-B.ST"
  },
  {
    "name": "BTS Group AB",
    "displaySymbol": "BTS-B.ST",
    "symbol": "BTS-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "BUBL.ST",
    "symbol": "BUBL.ST"
  },
  {
    "name": "Bufab AB (publ)",
    "displaySymbol": "BUFAB.ST",
    "symbol": "BUFAB.ST"
  },
  {
    "name": "Bulten AB",
    "displaySymbol": "BULTEN.ST",
    "symbol": "BULTEN.ST"
  },
  {
    "name": "Bure Equity AB",
    "displaySymbol": "BURE.ST",
    "symbol": "BURE.ST"
  },
  {
    "name": "Calliditas Therapeutics AB",
    "displaySymbol": "CALTX.ST",
    "symbol": "CALTX.ST"
  },
  {
    "name": "Camurus AB",
    "displaySymbol": "CAMX.ST",
    "symbol": "CAMX.ST"
  },
  {
    "name": "Cantargia AB",
    "displaySymbol": "CANTA.ST",
    "symbol": "CANTA.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "CAPIO.ST",
    "symbol": "CAPIO.ST"
  },
  {
    "name": "Castellum AB",
    "displaySymbol": "CAST.ST",
    "symbol": "CAST.ST"
  },
  {
    "name": "Catella AB Class A",
    "displaySymbol": "CAT-A.ST",
    "symbol": "CAT-A.ST"
  },
  {
    "name": "Catella AB Class B",
    "displaySymbol": "CAT-B.ST",
    "symbol": "CAT-B.ST"
  },
  {
    "name": "Catena AB",
    "displaySymbol": "CATE.ST",
    "symbol": "CATE.ST"
  },
  {
    "name": "Christian Berner Tech Trade AB",
    "displaySymbol": "CBTT-B.ST",
    "symbol": "CBTT-B.ST"
  },
  {
    "name": "Cavotec SA",
    "displaySymbol": "CCC.ST",
    "symbol": "CCC.ST"
  },
  {
    "name": "Concordia Maritime AB",
    "displaySymbol": "CCOR-B.ST",
    "symbol": "CCOR-B.ST"
  },
  {
    "name": "CellaVision AB",
    "displaySymbol": "CEVI.ST",
    "symbol": "CEVI.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "CGIT.ST",
    "symbol": "CGIT.ST"
  },
  {
    "name": "Cherry AB (publ)",
    "displaySymbol": "CHER-B.ST",
    "symbol": "CHER-B.ST"
  },
  {
    "name": "Cloetta AB",
    "displaySymbol": "CLA-B.ST",
    "symbol": "CLA-B.ST"
  },
  {
    "name": "Clas Ohlson AB",
    "displaySymbol": "CLAS-B.ST",
    "symbol": "CLAS-B.ST"
  },
  {
    "name": "CLX Communications AB (publ)",
    "displaySymbol": "CLX.ST",
    "symbol": "CLX.ST"
  },
  {
    "name": "Concentric AB",
    "displaySymbol": "COIC.ST",
    "symbol": "COIC.ST"
  },
  {
    "name": "Collector AB",
    "displaySymbol": "COLL.ST",
    "symbol": "COLL.ST"
  },
  {
    "name": "Consilium AB",
    "displaySymbol": "CONS-B.ST",
    "symbol": "CONS-B.ST"
  },
  {
    "name": "Coor Service Management Holding AB",
    "displaySymbol": "COOR.ST",
    "symbol": "COOR.ST"
  },
  {
    "name": "Corem Property Group AB Class A",
    "displaySymbol": "CORE-A.ST",
    "symbol": "CORE-A.ST"
  },
  {
    "name": "Corem Property Group AB Class B",
    "displaySymbol": "CORE-B.ST",
    "symbol": "CORE-B.ST"
  },
  {
    "name": "Corem Property Group AB Preference Shares",
    "displaySymbol": "CORE-PREF.ST",
    "symbol": "CORE-PREF.ST"
  },
  {
    "name": "C-Rad AB",
    "displaySymbol": "CRAD-B.ST",
    "symbol": "CRAD-B.ST"
  },
  {
    "name": "Creades AB (publ)",
    "displaySymbol": "CRED-A.ST",
    "symbol": "CRED-A.ST"
  },
  {
    "name": "Catena Media PLC",
    "displaySymbol": "CTM.ST",
    "symbol": "CTM.ST"
  },
  {
    "name": "CTT Systems AB",
    "displaySymbol": "CTT.ST",
    "symbol": "CTT.ST"
  },
  {
    "name": "Dedicare AB (publ)",
    "displaySymbol": "DEDI.ST",
    "symbol": "DEDI.ST"
  },
  {
    "name": "Dios Fastigheter AB",
    "displaySymbol": "DIOS.ST",
    "symbol": "DIOS.ST"
  },
  {
    "name": "Dometic Group AB (publ)",
    "displaySymbol": "DOM.ST",
    "symbol": "DOM.ST"
  },
  {
    "name": "Doro AB",
    "displaySymbol": "DORO.ST",
    "symbol": "DORO.ST"
  },
  {
    "name": "Duni AB",
    "displaySymbol": "DUNI.ST",
    "symbol": "DUNI.ST"
  },
  {
    "name": "Duroc AB",
    "displaySymbol": "DURC-B.ST",
    "symbol": "DURC-B.ST"
  },
  {
    "name": "Dustin Group AB",
    "displaySymbol": "DUST.ST",
    "symbol": "DUST.ST"
  },
  {
    "name": "Eastnine AB (publ)",
    "displaySymbol": "EAST.ST",
    "symbol": "EAST.ST"
  },
  {
    "name": "Edgeware AB (publ)",
    "displaySymbol": "EDGE.ST",
    "symbol": "EDGE.ST"
  },
  {
    "name": "Elekta AB (publ)",
    "displaySymbol": "EKTA-B.ST",
    "symbol": "EKTA-B.ST"
  },
  {
    "name": "Elanders AB",
    "displaySymbol": "ELAN-B.ST",
    "symbol": "ELAN-B.ST"
  },
  {
    "name": "Electra Gruppen AB (publ)",
    "displaySymbol": "ELEC.ST",
    "symbol": "ELEC.ST"
  },
  {
    "name": "Elos Medtech AB",
    "displaySymbol": "ELOS-B.ST",
    "symbol": "ELOS-B.ST"
  },
  {
    "name": "Eltel AB",
    "displaySymbol": "ELTEL.ST",
    "symbol": "ELTEL.ST"
  },
  {
    "name": "Electrolux AB Class A",
    "displaySymbol": "ELUX-A.ST",
    "symbol": "ELUX-A.ST"
  },
  {
    "name": "Electrolux AB Class B",
    "displaySymbol": "ELUX-B.ST",
    "symbol": "ELUX-B.ST"
  },
  {
    "name": "Empir Group AB",
    "displaySymbol": "EMPIR-B.ST",
    "symbol": "EMPIR-B.ST"
  },
  {
    "name": "Endomines AB (publ)",
    "displaySymbol": "ENDO.ST",
    "symbol": "ENDO.ST"
  },
  {
    "name": "Enea AB",
    "displaySymbol": "ENEA.ST",
    "symbol": "ENEA.ST"
  },
  {
    "name": "Interntnll Englsk Skln I Svg Hldng II AB",
    "displaySymbol": "ENG.ST",
    "symbol": "ENG.ST"
  },
  {
    "name": "Enquest Plc",
    "displaySymbol": "ENQ.ST",
    "symbol": "ENQ.ST"
  },
  {
    "name": "Eniro AB Preference Shares",
    "displaySymbol": "ENRO-PREF.ST",
    "symbol": "ENRO-PREF.ST"
  },
  {
    "name": "Eniro AB",
    "displaySymbol": "ENRO.ST",
    "symbol": "ENRO.ST"
  },
  {
    "name": "Eolus Vind AB (publ)",
    "displaySymbol": "EOLU-B.ST",
    "symbol": "EOLU-B.ST"
  },
  {
    "name": "Epiroc AB Class A",
    "displaySymbol": "EPI-A.ST",
    "symbol": "EPI-A.ST"
  },
  {
    "name": "Epiroc AB Class B",
    "displaySymbol": "EPI-B.ST",
    "symbol": "EPI-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "EPIS B.ST",
    "symbol": "EPIS B.ST"
  },
  {
    "name": "Episurf Medical AB",
    "displaySymbol": "EPIS-B.ST",
    "symbol": "EPIS-B.ST"
  },
  {
    "name": "Telefonaktiebolaget LM Ericsson Class A",
    "displaySymbol": "ERIC-A.ST",
    "symbol": "ERIC-A.ST"
  },
  {
    "name": "Telefonaktiebolaget LM Ericsson Class B",
    "displaySymbol": "ERIC-B.ST",
    "symbol": "ERIC-B.ST"
  },
  {
    "name": "Essity AB (publ) Class A",
    "displaySymbol": "ESSITY-A.ST",
    "symbol": "ESSITY-A.ST"
  },
  {
    "name": "Essity AB (publ) Class B",
    "displaySymbol": "ESSITY-B.ST",
    "symbol": "ESSITY-B.ST"
  },
  {
    "name": "Etrion SA",
    "displaySymbol": "ETX.ST",
    "symbol": "ETX.ST"
  },
  {
    "name": "Evolution Gaming Group AB (publ)",
    "displaySymbol": "EVO.ST",
    "symbol": "EVO.ST"
  },
  {
    "name": "eWork Group AB",
    "displaySymbol": "EWRK.ST",
    "symbol": "EWRK.ST"
  },
  {
    "name": "Fabege AB",
    "displaySymbol": "FABG.ST",
    "symbol": "FABG.ST"
  },
  {
    "name": "Fagerhult AB",
    "displaySymbol": "FAG.ST",
    "symbol": "FAG.ST"
  },
  {
    "name": "Feelgood Svenska AB (publ)",
    "displaySymbol": "FEEL.ST",
    "symbol": "FEEL.ST"
  },
  {
    "name": "Fingerprint Cards AB",
    "displaySymbol": "FING-B.ST",
    "symbol": "FING-B.ST"
  },
  {
    "name": "FM Mattsson Mora Group AB",
    "displaySymbol": "FMM-B.ST",
    "symbol": "FMM-B.ST"
  },
  {
    "name": "Ferronordic Machines AB",
    "displaySymbol": "FNM.ST",
    "symbol": "FNM.ST"
  },
  {
    "name": "Fenix Outdoor International AG",
    "displaySymbol": "FOI-B.ST",
    "symbol": "FOI-B.ST"
  },
  {
    "name": "FastPartner AB Preference Shares",
    "displaySymbol": "FPAR-PREF.ST",
    "symbol": "FPAR-PREF.ST"
  },
  {
    "name": "FastPartner AB",
    "displaySymbol": "FPAR.ST",
    "symbol": "FPAR.ST"
  },
  {
    "name": "FormPipe Software AB",
    "displaySymbol": "FPIP.ST",
    "symbol": "FPIP.ST"
  },
  {
    "name": "G5 Entertainment AB (publ)",
    "displaySymbol": "G5EN.ST",
    "symbol": "G5EN.ST"
  },
  {
    "name": "Garo AB",
    "displaySymbol": "GARO.ST",
    "symbol": "GARO.ST"
  },
  {
    "name": "Getinge AB",
    "displaySymbol": "GETI-B.ST",
    "symbol": "GETI-B.ST"
  },
  {
    "name": "GHP Specialty Care AB (publ)",
    "displaySymbol": "GHP.ST",
    "symbol": "GHP.ST"
  },
  {
    "name": "Granges AB",
    "displaySymbol": "GRNG.ST",
    "symbol": "GRNG.ST"
  },
  {
    "name": "Gunnebo AB",
    "displaySymbol": "GUNN.ST",
    "symbol": "GUNN.ST"
  },
  {
    "name": "Handicare Group AB",
    "displaySymbol": "HANDI.ST",
    "symbol": "HANDI.ST"
  },
  {
    "name": "Havsfrun Investment AB",
    "displaySymbol": "HAV-B.ST",
    "symbol": "HAV-B.ST"
  },
  {
    "name": "HEBA Fastighets AB",
    "displaySymbol": "HEBA-B.ST",
    "symbol": "HEBA-B.ST"
  },
  {
    "name": "Hembla AB",
    "displaySymbol": "HEM-B.ST",
    "symbol": "HEM-B.ST"
  },
  {
    "name": "Hemfosa Fastigheter AB Preference Shares",
    "displaySymbol": "HEMF-PREF.ST",
    "symbol": "HEMF-PREF.ST"
  },
  {
    "name": "Hemfosa Fastigheter AB",
    "displaySymbol": "HEMF.ST",
    "symbol": "HEMF.ST"
  },
  {
    "name": "Hexagon AB",
    "displaySymbol": "HEXA-B.ST",
    "symbol": "HEXA-B.ST"
  },
  {
    "name": "HiQ International AB",
    "displaySymbol": "HIQ.ST",
    "symbol": "HIQ.ST"
  },
  {
    "name": "Haldex AB",
    "displaySymbol": "HLDX.ST",
    "symbol": "HLDX.ST"
  },
  {
    "name": "H \u0026 M Hennes \u0026 Mauritz AB",
    "displaySymbol": "HM-B.ST",
    "symbol": "HM-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "HMED.ST",
    "symbol": "HMED.ST"
  },
  {
    "name": "HMS Networks AB",
    "displaySymbol": "HMS.ST",
    "symbol": "HMS.ST"
  },
  {
    "name": "Hoist Finance AB (publ)",
    "displaySymbol": "HOFI.ST",
    "symbol": "HOFI.ST"
  },
  {
    "name": "Holmen AB Class A",
    "displaySymbol": "HOLM-A.ST",
    "symbol": "HOLM-A.ST"
  },
  {
    "name": "Holmen AB Class B",
    "displaySymbol": "HOLM-B.ST",
    "symbol": "HOLM-B.ST"
  },
  {
    "name": "HEXPOL AB",
    "displaySymbol": "HPOL-B.ST",
    "symbol": "HPOL-B.ST"
  },
  {
    "name": "Hexatronic Group AB",
    "displaySymbol": "HTRO.ST",
    "symbol": "HTRO.ST"
  },
  {
    "name": "Hufvudstaden AB Class A",
    "displaySymbol": "HUFV-A.ST",
    "symbol": "HUFV-A.ST"
  },
  {
    "name": "Hufvudstaden AB Class C",
    "displaySymbol": "HUFV-C.ST",
    "symbol": "HUFV-C.ST"
  },
  {
    "name": "Humana AB",
    "displaySymbol": "HUM.ST",
    "symbol": "HUM.ST"
  },
  {
    "name": "Husqvarna AB Class A",
    "displaySymbol": "HUSQ-A.ST",
    "symbol": "HUSQ-A.ST"
  },
  {
    "name": "Husqvarna AB Class B",
    "displaySymbol": "HUSQ-B.ST",
    "symbol": "HUSQ-B.ST"
  },
  {
    "name": "IAR Systems Group AB",
    "displaySymbol": "IAR-B.ST",
    "symbol": "IAR-B.ST"
  },
  {
    "name": "Infant Bacterial Therapeutics AB",
    "displaySymbol": "IBT-B.ST",
    "symbol": "IBT-B.ST"
  },
  {
    "name": "ICA Gruppen AB",
    "displaySymbol": "ICA.ST",
    "symbol": "ICA.ST"
  },
  {
    "name": "ICTA AB (publ)",
    "displaySymbol": "ICTA.ST",
    "symbol": "ICTA.ST"
  },
  {
    "name": "Immunovia AB (publ)",
    "displaySymbol": "IMMNOV.ST",
    "symbol": "IMMNOV.ST"
  },
  {
    "name": "Immunicum AB",
    "displaySymbol": "IMMU.ST",
    "symbol": "IMMU.ST"
  },
  {
    "name": "Indutrade AB",
    "displaySymbol": "INDT.ST",
    "symbol": "INDT.ST"
  },
  {
    "name": "Industrivarden AB Class A",
    "displaySymbol": "INDU-A.ST",
    "symbol": "INDU-A.ST"
  },
  {
    "name": "Industrivarden AB Class C",
    "displaySymbol": "INDU-C.ST",
    "symbol": "INDU-C.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "INFRA.ST",
    "symbol": "INFRA.ST"
  },
  {
    "name": "Instalco Intressenter AB",
    "displaySymbol": "INSTAL.ST",
    "symbol": "INSTAL.ST"
  },
  {
    "name": "Intrum AB",
    "displaySymbol": "INTRUM.ST",
    "symbol": "INTRUM.ST"
  },
  {
    "name": "Investor AB Class A",
    "displaySymbol": "INVE-A.ST",
    "symbol": "INVE-A.ST"
  },
  {
    "name": "Investor AB Class B",
    "displaySymbol": "INVE-B.ST",
    "symbol": "INVE-B.ST"
  },
  {
    "name": "Inwido AB (publ)",
    "displaySymbol": "INWI.ST",
    "symbol": "INWI.ST"
  },
  {
    "name": "International Petroleum Corp",
    "displaySymbol": "IPCO.ST",
    "symbol": "IPCO.ST"
  },
  {
    "name": "Image Systems AB",
    "displaySymbol": "IS.ST",
    "symbol": "IS.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "ISAB.ST",
    "symbol": "ISAB.ST"
  },
  {
    "name": "ITAB Shop Concept AB",
    "displaySymbol": "ITAB-B.ST",
    "symbol": "ITAB-B.ST"
  },
  {
    "name": "Invisio Communications AB",
    "displaySymbol": "IVSO.ST",
    "symbol": "IVSO.ST"
  },
  {
    "name": "JM AB",
    "displaySymbol": "JM.ST",
    "symbol": "JM.ST"
  },
  {
    "name": "KABE Group AB",
    "displaySymbol": "KABE-B.ST",
    "symbol": "KABE-B.ST"
  },
  {
    "name": "KappAhl AB (publ)",
    "displaySymbol": "KAHL.ST",
    "symbol": "KAHL.ST"
  },
  {
    "name": "Karo Pharma AB",
    "displaySymbol": "KARO.ST",
    "symbol": "KARO.ST"
  },
  {
    "name": "Karolinska Development AB",
    "displaySymbol": "KDEV.ST",
    "symbol": "KDEV.ST"
  },
  {
    "name": "Kindred Group PLC",
    "displaySymbol": "KIND-SDB.ST",
    "symbol": "KIND-SDB.ST"
  },
  {
    "name": "Kinnevik AB Class A",
    "displaySymbol": "KINV-A.ST",
    "symbol": "KINV-A.ST"
  },
  {
    "name": "Kinnevik AB Class B",
    "displaySymbol": "KINV-B.ST",
    "symbol": "KINV-B.ST"
  },
  {
    "name": "Kungsleden AB",
    "displaySymbol": "KLED.ST",
    "symbol": "KLED.ST"
  },
  {
    "name": "Klovern AB Class A",
    "displaySymbol": "KLOV-A.ST",
    "symbol": "KLOV-A.ST"
  },
  {
    "name": "Klovern AB Class B",
    "displaySymbol": "KLOV-B.ST",
    "symbol": "KLOV-B.ST"
  },
  {
    "name": "Klovern AB Preference Shares",
    "displaySymbol": "KLOV-PREF.ST",
    "symbol": "KLOV-PREF.ST"
  },
  {
    "name": "Knowit AB (publ)",
    "displaySymbol": "KNOW.ST",
    "symbol": "KNOW.ST"
  },
  {
    "name": "Lagercrantz Group AB",
    "displaySymbol": "LAGR-B.ST",
    "symbol": "LAGR-B.ST"
  },
  {
    "name": "Lammhults Design Group AB",
    "displaySymbol": "LAMM-B.ST",
    "symbol": "LAMM-B.ST"
  },
  {
    "name": "Investment AB Latour",
    "displaySymbol": "LATO-B.ST",
    "symbol": "LATO-B.ST"
  },
  {
    "name": "LeoVegas AB (publ)",
    "displaySymbol": "LEO.ST",
    "symbol": "LEO.ST"
  },
  {
    "name": "Lindab International AB",
    "displaySymbol": "LIAB.ST",
    "symbol": "LIAB.ST"
  },
  {
    "name": "Lifco AB (publ)",
    "displaySymbol": "LIFCO-B.ST",
    "symbol": "LIFCO-B.ST"
  },
  {
    "name": "Loomis AB",
    "displaySymbol": "LOOM-B.ST",
    "symbol": "LOOM-B.ST"
  },
  {
    "name": "Lucara Diamond Corp",
    "displaySymbol": "LUC.ST",
    "symbol": "LUC.ST"
  },
  {
    "name": "Lundin Gold Inc",
    "displaySymbol": "LUG.ST",
    "symbol": "LUG.ST"
  },
  {
    "name": "Lundin Mining Corporation",
    "displaySymbol": "LUMI.ST",
    "symbol": "LUMI.ST"
  },
  {
    "name": "L E Lundbergforetagen AB (publ)",
    "displaySymbol": "LUND-B.ST",
    "symbol": "LUND-B.ST"
  },
  {
    "name": "Lundin Petroleum AB",
    "displaySymbol": "LUPE.ST",
    "symbol": "LUPE.ST"
  },
  {
    "name": "Magnolia Bostad AB",
    "displaySymbol": "MAG.ST",
    "symbol": "MAG.ST"
  },
  {
    "name": "MedCap AB (publ)",
    "displaySymbol": "MCAP.ST",
    "symbol": "MCAP.ST"
  },
  {
    "name": "Medicover AB",
    "displaySymbol": "MCOV-B.ST",
    "symbol": "MCOV-B.ST"
  },
  {
    "name": "Malmbergs Elektriska AB (publ)",
    "displaySymbol": "MEAB-B.ST",
    "symbol": "MEAB-B.ST"
  },
  {
    "name": "Mekonomen AB",
    "displaySymbol": "MEKO.ST",
    "symbol": "MEKO.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "MIC-SDB.ST",
    "symbol": "MIC-SDB.ST"
  },
  {
    "name": "Midway Holding AB Class A",
    "displaySymbol": "MIDW-A.ST",
    "symbol": "MIDW-A.ST"
  },
  {
    "name": "Midway Holding AB Class B",
    "displaySymbol": "MIDW-B.ST",
    "symbol": "MIDW-B.ST"
  },
  {
    "name": "MIPS AB",
    "displaySymbol": "MIPS.ST",
    "symbol": "MIPS.ST"
  },
  {
    "name": "Momentum Group AB",
    "displaySymbol": "MMGR-B.ST",
    "symbol": "MMGR-B.ST"
  },
  {
    "name": "Moberg Pharma AB (publ)",
    "displaySymbol": "MOB.ST",
    "symbol": "MOB.ST"
  },
  {
    "name": "Moment Group AB",
    "displaySymbol": "MOMENT.ST",
    "symbol": "MOMENT.ST"
  },
  {
    "name": "MQ Holding AB",
    "displaySymbol": "MQ.ST",
    "symbol": "MQ.ST"
  },
  {
    "name": "Mr Green \u0026 Co AB (publ)",
    "displaySymbol": "MRG.ST",
    "symbol": "MRG.ST"
  },
  {
    "name": "Micro Systemation AB (publ)",
    "displaySymbol": "MSAB-B.ST",
    "symbol": "MSAB-B.ST"
  },
  {
    "name": "Midsona AB Class A",
    "displaySymbol": "MSON-A.ST",
    "symbol": "MSON-A.ST"
  },
  {
    "name": "Midsona AB Class B",
    "displaySymbol": "MSON-B.ST",
    "symbol": "MSON-B.ST"
  },
  {
    "name": "Modern Times Group Mtg AB Class A",
    "displaySymbol": "MTG-A.ST",
    "symbol": "MTG-A.ST"
  },
  {
    "name": "Modern Times Group Mtg AB Class B",
    "displaySymbol": "MTG-B.ST",
    "symbol": "MTG-B.ST"
  },
  {
    "name": "Munters Group AB",
    "displaySymbol": "MTRS.ST",
    "symbol": "MTRS.ST"
  },
  {
    "name": "MultiQ International AB",
    "displaySymbol": "MULQ.ST",
    "symbol": "MULQ.ST"
  },
  {
    "name": "Medivir AB",
    "displaySymbol": "MVIR-B.ST",
    "symbol": "MVIR-B.ST"
  },
  {
    "name": "Mycronic AB (publ)",
    "displaySymbol": "MYCR.ST",
    "symbol": "MYCR.ST"
  },
  {
    "name": "NAXS AB (publ)",
    "displaySymbol": "NAXS.ST",
    "symbol": "NAXS.ST"
  },
  {
    "name": "NCAB Group AB (publ)",
    "displaySymbol": "NCAB.ST",
    "symbol": "NCAB.ST"
  },
  {
    "name": "NCC AB Class A",
    "displaySymbol": "NCC-A.ST",
    "symbol": "NCC-A.ST"
  },
  {
    "name": "NCC AB Class B",
    "displaySymbol": "NCC-B.ST",
    "symbol": "NCC-B.ST"
  },
  {
    "name": "Nordea Bank Abp",
    "displaySymbol": "NDA-SE.ST",
    "symbol": "NDA-SE.ST"
  },
  {
    "name": "NetEnt AB (publ)",
    "displaySymbol": "NET-B.ST",
    "symbol": "NET-B.ST"
  },
  {
    "name": "Net Insight AB",
    "displaySymbol": "NETI-B.ST",
    "symbol": "NETI-B.ST"
  },
  {
    "name": "New Wave Group AB",
    "displaySymbol": "NEWA-B.ST",
    "symbol": "NEWA-B.ST"
  },
  {
    "name": "NGEx Resources Inc",
    "displaySymbol": "NGQ.ST",
    "symbol": "NGQ.ST"
  },
  {
    "name": "NGS Group AB",
    "displaySymbol": "NGS.ST",
    "symbol": "NGS.ST"
  },
  {
    "name": "Nibe Industrier AB",
    "displaySymbol": "NIBE-B.ST",
    "symbol": "NIBE-B.ST"
  },
  {
    "name": "Nilorngruppen AB",
    "displaySymbol": "NIL-B.ST",
    "symbol": "NIL-B.ST"
  },
  {
    "name": "Nederman Holding AB",
    "displaySymbol": "NMAN.ST",
    "symbol": "NMAN.ST"
  },
  {
    "name": "Nobia AB",
    "displaySymbol": "NOBI.ST",
    "symbol": "NOBI.ST"
  },
  {
    "name": "Nobina AB (publ)",
    "displaySymbol": "NOBINA.ST",
    "symbol": "NOBINA.ST"
  },
  {
    "name": "Nolato AB",
    "displaySymbol": "NOLA-B.ST",
    "symbol": "NOLA-B.ST"
  },
  {
    "name": "Note AB (publ)",
    "displaySymbol": "NOTE.ST",
    "symbol": "NOTE.ST"
  },
  {
    "name": "NP3 Fastigheter AB Preference Shares",
    "displaySymbol": "NP3-PREF.ST",
    "symbol": "NP3-PREF.ST"
  },
  {
    "name": "NP3 Fastigheter AB",
    "displaySymbol": "NP3.ST",
    "symbol": "NP3.ST"
  },
  {
    "name": "Novotek AB",
    "displaySymbol": "NTEK-B.ST",
    "symbol": "NTEK-B.ST"
  },
  {
    "name": "Nuevolution AB (publ)",
    "displaySymbol": "NUE.ST",
    "symbol": "NUE.ST"
  },
  {
    "name": "NeuroVive Pharmaceutical AB",
    "displaySymbol": "NVP.ST",
    "symbol": "NVP.ST"
  },
  {
    "name": "Nordic Waterproofing Holding A/S",
    "displaySymbol": "NWG.ST",
    "symbol": "NWG.ST"
  },
  {
    "name": "Nyfosa AB",
    "displaySymbol": "NYF.ST",
    "symbol": "NYF.ST"
  },
  {
    "name": "Oasmia Pharmaceutical AB",
    "displaySymbol": "OASM.ST",
    "symbol": "OASM.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "OBST.ST",
    "symbol": "OBST.ST"
  },
  {
    "name": "Odd Molly International AB",
    "displaySymbol": "ODD.ST",
    "symbol": "ODD.ST"
  },
  {
    "name": "OEM International AB",
    "displaySymbol": "OEM-B.ST",
    "symbol": "OEM-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "OMNI.ST",
    "symbol": "OMNI.ST"
  },
  {
    "name": "Oncopeptides AB",
    "displaySymbol": "ONCO.ST",
    "symbol": "ONCO.ST"
  },
  {
    "name": "OSCARPROPE/PREF",
    "displaySymbol": "OP-PREF.ST",
    "symbol": "OP-PREF.ST"
  },
  {
    "name": "Oscar Properties Holding AB Preference Shares Class B",
    "displaySymbol": "OP-PREFB.ST",
    "symbol": "OP-PREFB.ST"
  },
  {
    "name": "Oscar Properties Holding AB",
    "displaySymbol": "OP.ST",
    "symbol": "OP.ST"
  },
  {
    "name": "Opus Group AB (publ)",
    "displaySymbol": "OPUS.ST",
    "symbol": "OPUS.ST"
  },
  {
    "name": "Investment AB Oresund",
    "displaySymbol": "ORES.ST",
    "symbol": "ORES.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "ORGO.ST",
    "symbol": "ORGO.ST"
  },
  {
    "name": "Oriflame Holding AG",
    "displaySymbol": "ORI.ST",
    "symbol": "ORI.ST"
  },
  {
    "name": "Ortivus AB Class A",
    "displaySymbol": "ORTI-A.ST",
    "symbol": "ORTI-A.ST"
  },
  {
    "name": "Ortivus AB Class B",
    "displaySymbol": "ORTI-B.ST",
    "symbol": "ORTI-B.ST"
  },
  {
    "name": "Orexo AB",
    "displaySymbol": "ORX.ST",
    "symbol": "ORX.ST"
  },
  {
    "name": "Proact IT Group AB",
    "displaySymbol": "PACT.ST",
    "symbol": "PACT.ST"
  },
  {
    "name": "Peab AB",
    "displaySymbol": "PEAB-B.ST",
    "symbol": "PEAB-B.ST"
  },
  {
    "name": "Projektengagemang Sweden AB",
    "displaySymbol": "PENG-B.ST",
    "symbol": "PENG-B.ST"
  },
  {
    "name": "Platzer Fastigheter Holding AB (publ)",
    "displaySymbol": "PLAZ-B.ST",
    "symbol": "PLAZ-B.ST"
  },
  {
    "name": "Pandox AB",
    "displaySymbol": "PNDX-B.ST",
    "symbol": "PNDX-B.ST"
  },
  {
    "name": "Poolia AB",
    "displaySymbol": "POOL-B.ST",
    "symbol": "POOL-B.ST"
  },
  {
    "name": "Precise Biometrics AB",
    "displaySymbol": "PREC.ST",
    "symbol": "PREC.ST"
  },
  {
    "name": "Prevas AB",
    "displaySymbol": "PREV-B.ST",
    "symbol": "PREV-B.ST"
  },
  {
    "name": "Pricer AB (publ)",
    "displaySymbol": "PRIC-B.ST",
    "symbol": "PRIC-B.ST"
  },
  {
    "name": "Probi AB",
    "displaySymbol": "PROB.ST",
    "symbol": "PROB.ST"
  },
  {
    "name": "ProfilGruppen AB",
    "displaySymbol": "PROF-B.ST",
    "symbol": "PROF-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "PXXS-SDB.ST",
    "symbol": "PXXS-SDB.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "QIIWI.ST",
    "symbol": "QIIWI.ST"
  },
  {
    "name": "Q linea AB",
    "displaySymbol": "QLINEA.ST",
    "symbol": "QLINEA.ST"
  },
  {
    "name": "QLIROGROUP/SH",
    "displaySymbol": "QLRO.ST",
    "symbol": "QLRO.ST"
  },
  {
    "name": "Radisson Hospitality AB (publ)",
    "displaySymbol": "RADH.ST",
    "symbol": "RADH.ST"
  },
  {
    "name": "Railcare Group AB",
    "displaySymbol": "RAIL.ST",
    "symbol": "RAIL.ST"
  },
  {
    "name": "Ratos AB Class A",
    "displaySymbol": "RATO-A.ST",
    "symbol": "RATO-A.ST"
  },
  {
    "name": "Ratos AB Class B",
    "displaySymbol": "RATO-B.ST",
    "symbol": "RATO-B.ST"
  },
  {
    "name": "RaySearch Laboratories AB (publ)",
    "displaySymbol": "RAY-B.ST",
    "symbol": "RAY-B.ST"
  },
  {
    "name": "Recipharm AB (publ)",
    "displaySymbol": "RECI-B.ST",
    "symbol": "RECI-B.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "RECY.ST",
    "symbol": "RECY.ST"
  },
  {
    "name": "Rejlers AB (publ)",
    "displaySymbol": "REJL-B.ST",
    "symbol": "REJL-B.ST"
  },
  {
    "name": "Resurs Holding AB (publ)",
    "displaySymbol": "RESURS.ST",
    "symbol": "RESURS.ST"
  },
  {
    "name": "Rnb Retail and Brands AB (publ)",
    "displaySymbol": "RNBS.ST",
    "symbol": "RNBS.ST"
  },
  {
    "name": "Rottneros AB",
    "displaySymbol": "RROS.ST",
    "symbol": "RROS.ST"
  },
  {
    "name": "Saab AB",
    "displaySymbol": "SAAB-B.ST",
    "symbol": "SAAB-B.ST"
  },
  {
    "name": "Sagax AB",
    "displaySymbol": "SAGA-A.ST",
    "symbol": "SAGA-A.ST"
  },
  {
    "name": "Sagax AB Class B",
    "displaySymbol": "SAGA-B.ST",
    "symbol": "SAGA-B.ST"
  },
  {
    "name": "Sagax AB Class D",
    "displaySymbol": "SAGA-D.ST",
    "symbol": "SAGA-D.ST"
  },
  {
    "name": "Sagax AB Preferred Shares",
    "displaySymbol": "SAGA-PREF.ST",
    "symbol": "SAGA-PREF.ST"
  },
  {
    "name": "Sandvik AB",
    "displaySymbol": "SAND.ST",
    "symbol": "SAND.ST"
  },
  {
    "name": "Saniona AB",
    "displaySymbol": "SANION.ST",
    "symbol": "SANION.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "SAS-PREF.ST",
    "symbol": "SAS-PREF.ST"
  },
  {
    "name": "SAS AB",
    "displaySymbol": "SAS.ST",
    "symbol": "SAS.ST"
  },
  {
    "name": "Svenska Cellulosa SCA AB Class A",
    "displaySymbol": "SCA-A.ST",
    "symbol": "SCA-A.ST"
  },
  {
    "name": "Svenska Cellulosa SCA AB Class B",
    "displaySymbol": "SCA-B.ST",
    "symbol": "SCA-B.ST"
  },
  {
    "name": "Scandi Standard AB (publ)",
    "displaySymbol": "SCST.ST",
    "symbol": "SCST.ST"
  },
  {
    "name": "N/A",
    "displaySymbol": "SEAFI.ST",
    "symbol": "SEAFI.ST"
  },
  {
    "name": "Skandinaviska Enskilda Banken AB Class A",
    "displaySymbol": "SEB-A.ST",
    "symbol": "SEB-A.ST"
  },
  {
    "name": "Skandinaviska Enskilda Banken AB Class C",
    "displaySymbol": "SEB-C.ST",
    "symbol": "SEB-C.ST"
  },
  {
    "name": "Sectra AB",
    "displaySymbol": "SECT-B.ST",
    "symbol": "SECT-B.ST"
  },
  {
    "name": "Securitas AB",
    "displaySymbol": "SECU-B.ST",
    "symbol": "SECU-B.ST"
  },
  {
    "name": "Semcon AB",
    "displaySymbol": "SEMC.ST",
    "symbol": "SEMC.ST"
  },
  {
    "name": "Sensys Gatso Group AB",
    "displaySymbol": "SENS.ST",
    "symbol": "SENS.ST"
  },
  {
    "name": "Svenska Handelsbanken AB Class A",
    "displaySymbol": "SHB-A.ST",
    "symbol": "SHB-A.ST"
  },
  {
    "name": "Svenska Handelsbanken AB Class B",
    "displaySymbol": "SHB-B.ST",
    "symbol": "SHB-B.ST"
  },
  {
    "name": "Scandic Hotels Group AB",
    "displaySymbol": "SHOT.ST",
    "symbol": "SHOT.ST"
  },
  {
    "name": "SinterCast AB",
    "displaySymbol": "SINT.ST",
    "symbol": "SINT.ST"
  },
  {
    "name": "Skanska AB",
    "displaySymbol": "SKA-B.ST",
    "symbol": "SKA-B.ST"
  },
  {
    "name": "SKF AB Class A",
    "displaySymbol": "SKF-A.ST",
    "symbol": "SKF-A.ST"
  },
  {
    "name": "SKF AB Class B",
    "displaySymbol": "SKF-B.ST",
    "symbol": "SKF-B.ST"
  },
  {
    "name": "SkiStar AB",
    "displaySymbol": "SKIS-B.ST",
    "symbol": "SKIS-B.ST"
  },
  {
    "name": "Semafo Inc.",
    "displaySymbol": "SMF.ST",
    "symbol": "SMF.ST"
  },
  {
    "name": "Swedish Orphan Biovitrum AB (publ)",
    "displaySymbol": "SOBI.ST",
    "symbol": "SOBI.ST"
  },
  {
    "name": "Softronic AB",
    "displaySymbol": "SOF-B.ST",
    "symbol": "SOF-B.ST"
  },
  {
    "name": "Sportamore AB (Publ)",
    "displaySymbol": "SPOR.ST",
    "symbol": "SPOR.ST"
  },
  {
    "name": "SERNEKE Group AB (publ)",
    "displaySymbol": "SRNKE-B.ST",
    "symbol": "SRNKE-B.ST"
  },
  {
    "name": "SSAB AB Class A",
    "displaySymbol": "SSAB-A.ST",
    "symbol": "SSAB-A.ST"
  },
  {
    "name": "SSAB AB Class B",
    "displaySymbol": "SSAB-B.ST",
    "symbol": "SSAB-B.ST"
  },
  {
    "name": "SSM Holding AB (publ)",
    "displaySymbol": "SSM.ST",
    "symbol": "SSM.ST"
  },
  {
    "name": "Starbreeze AB",
    "displaySymbol": "STAR-A.ST",
    "symbol": "STAR-A.ST"
  },
  {
    "name": "Starbreeze AB Class B",
    "displaySymbol": "STAR-B.ST",
    "symbol": "STAR-B.ST"
  },
  {
    "name": "STORA ENSO OYJ/Sh  Cl A",
    "displaySymbol": "STE-A.ST",
    "symbol": "STE-A.ST"
  },
  {
    "name": "STORA ENSO OYJ/Sh  Cl R",
    "displaySymbol": "STE-R.ST",
    "symbol": "STE-R.ST"
  },
  {
    "name": "Stendorren Fastigheter AB",
    "displaySymbol": "STEF-B.ST",
    "symbol": "STEF-B.ST"
  },
  {
    "name": "Strax AB",
    "displaySymbol": "STRAX.ST",
    "symbol": "STRAX.ST"
  },
  {
    "name": "Stockwik Forvaltning AB",
    "displaySymbol": "STWK.ST",
    "symbol": "STWK.ST"
  },
  {
    "name": "Svedbergs i Dalstorp AB",
    "displaySymbol": "SVED-B.ST",
    "symbol": "SVED-B.ST"
  },
  {
    "name": "Studsvik AB",
    "displaySymbol": "SVIK.ST",
    "symbol": "SVIK.ST"
  },
  {
    "name": "Svolder AB Class A",
    "displaySymbol": "SVOL-A.ST",
    "symbol": "SVOL-A.ST"
  },
  {
    "name": "Svolder AB Class B",
    "displaySymbol": "SVOL-B.ST",
    "symbol": "SVOL-B.ST"
  },
  {
    "name": "Sweco AB (publ) Class A",
    "displaySymbol": "SWEC-A.ST",
    "symbol": "SWEC-A.ST"
  },
  {
    "name": "Sweco AB (publ) Class B",
    "displaySymbol": "SWEC-B.ST",
    "symbol": "SWEC-B.ST"
  },
  {
    "name": "Swedbank AB",
    "displaySymbol": "SWED-A.ST",
    "symbol": "SWED-A.ST"
  },
  {
    "name": "Swedish Match AB",
    "displaySymbol": "SWMA.ST",
    "symbol": "SWMA.ST"
  },
  {
    "name": "Swedol AB (publ)",
    "displaySymbol": "SWOL-B.ST",
    "symbol": "SWOL-B.ST"
  },
  {
    "name": "Systemair AB",
    "displaySymbol": "SYSR.ST",
    "symbol": "SYSR.ST"
  },
  {
    "name": "Tele2 AB Class A",
    "displaySymbol": "TEL2-A.ST",
    "symbol": "TEL2-A.ST"
  },
  {
    "name": "Tele2 AB Class B",
    "displaySymbol": "TEL2-B.ST",
    "symbol": "TEL2-B.ST"
  },
  {
    "name": "Telia Company AB",
    "displaySymbol": "TELIA.ST",
    "symbol": "TELIA.ST"
  },
  {
    "name": "Tethys Oil AB",
    "displaySymbol": "TETY.ST",
    "symbol": "TETY.ST"
  },
  {
    "name": "TF Bank AB",
    "displaySymbol": "TFBANK.ST",
    "symbol": "TFBANK.ST"
  },
  {
    "name": "Thule Group AB",
    "displaySymbol": "THULE.ST",
    "symbol": "THULE.ST"
  },
  {
    "name": "Tieto Oyj",
    "displaySymbol": "TIETOS.ST",
    "symbol": "TIETOS.ST"
  },
  {
    "name": "Tobii AB",
    "displaySymbol": "TOBII.ST",
    "symbol": "TOBII.ST"
  },
  {
    "name": "AB Traction",
    "displaySymbol": "TRAC-B.ST",
    "symbol": "TRAC-B.ST"
  },
  {
    "name": "TradeDoubler AB",
    "displaySymbol": "TRAD.ST",
    "symbol": "TRAD.ST"
  },
  {
    "name": "Trelleborg AB",
    "displaySymbol": "TREL-B.ST",
    "symbol": "TREL-B.ST"
  },
  {
    "name": "Trention AB",
    "displaySymbol": "TRENT.ST",
    "symbol": "TRENT.ST"
  },
  {
    "name": "Troax Group AB (publ)",
    "displaySymbol": "TROAX.ST",
    "symbol": "TROAX.ST"
  },
  {
    "name": "VBG Group AB (publ)",
    "displaySymbol": "VBG-B.ST",
    "symbol": "VBG-B.ST"
  },
  {
    "name": "Victoria Park AB Class A",
    "displaySymbol": "VICP-A.ST",
    "symbol": "VICP-A.ST"
  },
  {
    "name": "Victoria Park AB Class B",
    "displaySymbol": "VICP-B.ST",
    "symbol": "VICP-B.ST"
  },
  {
    "name": "Victoria Park AB Preference Shares",
    "displaySymbol": "VICP-PREF.ST",
    "symbol": "VICP-PREF.ST"
  },
  {
    "name": "Vitec Software Group AB (publ)",
    "displaySymbol": "VIT-B.ST",
    "symbol": "VIT-B.ST"
  },
  {
    "name": "Vitrolife AB",
    "displaySymbol": "VITR.ST",
    "symbol": "VITR.ST"
  },
  {
    "name": "VEONEERINC/SDR",
    "displaySymbol": "VNE-SDB.ST",
    "symbol": "VNE-SDB.ST"
  },
  {
    "name": "Vostok New Ventures Ltd",
    "displaySymbol": "VNV-SDB.ST",
    "symbol": "VNV-SDB.ST"
  },
  {
    "name": "Volati AB Preference Shares",
    "displaySymbol": "VOLO-PREF.ST",
    "symbol": "VOLO-PREF.ST"
  },
  {
    "name": "Volati AB",
    "displaySymbol": "VOLO.ST",
    "symbol": "VOLO.ST"
  },
  {
    "name": "Volvo AB Class A",
    "displaySymbol": "VOLV-A.ST",
    "symbol": "VOLV-A.ST"
  },
  {
    "name": "Volvo AB Class B",
    "displaySymbol": "VOLV-B.ST",
    "symbol": "VOLV-B.ST"
  },
  {
    "name": "Venue Retail Group AB",
    "displaySymbol": "VRG-B.ST",
    "symbol": "VRG-B.ST"
  },
  {
    "name": "Viking Supply Ships AB",
    "displaySymbol": "VSSAB-B.ST",
    "symbol": "VSSAB-B.ST"
  },
  {
    "name": "Wallenstam AB",
    "displaySymbol": "WALL-B.ST",
    "symbol": "WALL-B.ST"
  },
  {
    "name": "Wihlborgs Fastigheter AB",
    "displaySymbol": "WIHL.ST",
    "symbol": "WIHL.ST"
  },
  {
    "name": "Wise Group AB",
    "displaySymbol": "WISE.ST",
    "symbol": "WISE.ST"
  },
  {
    "name": "XANO Industri AB",
    "displaySymbol": "XANO-B.ST",
    "symbol": "XANO-B.ST"
  },
  {
    "name": "Xvivo Perfusion AB",
    "displaySymbol": "XVIVO.ST",
    "symbol": "XVIVO.ST"
  },
  {
    "name": "Zetadisplay AB",
    "displaySymbol": "ZETA.ST",
    "symbol": "ZETA.ST"
  },
  {
    "name": "Acarix AB (publ)",
    "displaySymbol": "ACARIX.ST",
    "symbol": "ACARIX.ST"
  },
  {
    "name": "Ascelia Pharma AB (publ)",
    "displaySymbol": "ACE.ST",
    "symbol": "ACE.ST"
  },
  {
    "name": "Addtech AB (publ.)",
    "displaySymbol": "ADDT.B.ST",
    "symbol": "ADDT.B.ST"
  },
  {
    "name": "AF Poyry AB (publ)",
    "displaySymbol": "AF.B.ST",
    "symbol": "AF.B.ST"
  },
  {
    "name": "AGES Industri AB (publ)",
    "displaySymbol": "AGES.B.ST",
    "symbol": "AGES.B.ST"
  },
  {
    "name": "Byggmastare Anders J Ahlstrom Holding AB (publ)",
    "displaySymbol": "AJA.B.ST",
    "symbol": "AJA.B.ST"
  },
  {
    "name": "AddLife AB (publ)",
    "displaySymbol": "ALIF.B.ST",
    "symbol": "ALIF.B.ST"
  },
  {
    "name": "Autoliv, Inc",
    "displaySymbol": "ALIV.SDB.ST",
    "symbol": "ALIV.SDB.ST"
  },
  {
    "name": "ALM Equity AB (publ)",
    "displaySymbol": "ALM.ST",
    "symbol": "ALM.ST"
  },
  {
    "name": "Amasten Fastighets AB (publ)",
    "displaySymbol": "AMAST.ST",
    "symbol": "AMAST.ST"
  },
  {
    "name": "Addnode Group AB (publ)",
    "displaySymbol": "ANOD.B.ST",
    "symbol": "ANOD.B.ST"
  },
  {
    "name": "Arctic Minerals AB (publ)",
    "displaySymbol": "ARCT.ST",
    "symbol": "ARCT.ST"
  },
  {
    "name": "Arion banki hf",
    "displaySymbol": "ARION.SDB.ST",
    "symbol": "ARION.SDB.ST"
  },
  {
    "name": "Arjo AB (publ)",
    "displaySymbol": "ARJO.B.ST",
    "symbol": "ARJO.B.ST"
  },
  {
    "name": "Aspire Global plc",
    "displaySymbol": "ASPIRE.ST",
    "symbol": "ASPIRE.ST"
  },
  {
    "name": "ASSA ABLOY AB (publ)",
    "displaySymbol": "ASSA.B.ST",
    "symbol": "ASSA.B.ST"
  },
  {
    "name": "ASTRALIS GROUP",
    "displaySymbol": "ASTGRP.ST",
    "symbol": "ASTGRP.ST"
  },
  {
    "name": "Atlas Copco AB",
    "displaySymbol": "ATCO.A.ST",
    "symbol": "ATCO.A.ST"
  },
  {
    "name": "Atlas Copco AB",
    "displaySymbol": "ATCO.B.ST",
    "symbol": "ATCO.B.ST"
  },
  {
    "name": "Atrium Ljungberg AB (publ)",
    "displaySymbol": "ATRLJ.B.ST",
    "symbol": "ATRLJ.B.ST"
  },
  {
    "name": "Auriant Mining AB (publ)",
    "displaySymbol": "AUR.ST",
    "symbol": "AUR.ST"
  },
  {
    "name": "Bactiguard Holding AB (publ)",
    "displaySymbol": "BACTI.B.ST",
    "symbol": "BACTI.B.ST"
  },
  {
    "name": "Fastighets AB Balder (publ)",
    "displaySymbol": "BALD.B.ST",
    "symbol": "BALD.B.ST"
  },
  {
    "name": "Beijer Alma AB (publ)",
    "displaySymbol": "BEIA.B.ST",
    "symbol": "BEIA.B.ST"
  },
  {
    "name": "Beijer Ref AB (publ)",
    "displaySymbol": "BEIJ.B.ST",
    "symbol": "BEIJ.B.ST"
  },
  {
    "name": "Bergman \u0026 Beving AB (publ)",
    "displaySymbol": "BERG.B.ST",
    "symbol": "BERG.B.ST"
  },
  {
    "name": "Betsson AB",
    "displaySymbol": "BETS.B.ST",
    "symbol": "BETS.B.ST"
  },
  {
    "name": "Bilia AB (publ)",
    "displaySymbol": "BILI.A.ST",
    "symbol": "BILI.A.ST"
  },
  {
    "name": "BioGaia AB (publ)",
    "displaySymbol": "BIOG.B.ST",
    "symbol": "BIOG.B.ST"
  },
  {
    "name": "Bonava AB (publ)",
    "displaySymbol": "BONAV.A.ST",
    "symbol": "BONAV.A.ST"
  },
  {
    "name": "Bonava AB (publ)",
    "displaySymbol": "BONAV.B.ST",
    "symbol": "BONAV.B.ST"
  },
  {
    "name": "Bredband2 i Skandinavien AB (publ)",
    "displaySymbol": "BRE2.ST",
    "symbol": "BRE2.ST"
  },
  {
    "name": "Bergs Timber AB (publ)",
    "displaySymbol": "BRG.B.ST",
    "symbol": "BRG.B.ST"
  },
  {
    "name": "Brighter AB (publ)",
    "displaySymbol": "BRIG.ST",
    "symbol": "BRIG.ST"
  },
  {
    "name": "Brinova Fastigheter AB (publ)",
    "displaySymbol": "BRIN.B.ST",
    "symbol": "BRIN.B.ST"
  },
  {
    "name": "BTS Group AB (publ)",
    "displaySymbol": "BTS.B.ST",
    "symbol": "BTS.B.ST"
  },
  {
    "name": "CAG Group AB (publ)",
    "displaySymbol": "CAG.ST",
    "symbol": "CAG.ST"
  },
  {
    "name": "Capacent Holding AB (publ)",
    "displaySymbol": "CAPAC.ST",
    "symbol": "CAPAC.ST"
  },
  {
    "name": "Catella AB (publ)",
    "displaySymbol": "CAT.A.ST",
    "symbol": "CAT.A.ST"
  },
  {
    "name": "Catella AB (publ)",
    "displaySymbol": "CAT.B.ST",
    "symbol": "CAT.B.ST"
  },
  {
    "name": "Christian Berner Tech Trade AB (publ)",
    "displaySymbol": "CBTT.B.ST",
    "symbol": "CBTT.B.ST"
  },
  {
    "name": "Concordia Maritime AB (publ)",
    "displaySymbol": "CCOR.B.ST",
    "symbol": "CCOR.B.ST"
  },
  {
    "name": "Cortus Energy AB (publ)",
    "displaySymbol": "CE.ST",
    "symbol": "CE.ST"
  },
  {
    "name": "Cloetta AB (publ)",
    "displaySymbol": "CLA.B.ST",
    "symbol": "CLA.B.ST"
  },
  {
    "name": "Clas Ohlson AB (publ)",
    "displaySymbol": "CLAS.B.ST",
    "symbol": "CLAS.B.ST"
  },
  {
    "name": "Consilium AB (publ)",
    "displaySymbol": "CONS.B.ST",
    "symbol": "CONS.B.ST"
  },
  {
    "name": "Corem Property Group AB (publ)",
    "displaySymbol": "CORE.PREF.ST",
    "symbol": "CORE.PREF.ST"
  },
  {
    "name": "C-Rad AB (publ)",
    "displaySymbol": "CRAD.B.ST",
    "symbol": "CRAD.B.ST"
  },
  {
    "name": "Creades AB",
    "displaySymbol": "CRED.A.ST",
    "symbol": "CRED.A.ST"
  },
  {
    "name": "Diadrom Holding AB (publ)",
    "displaySymbol": "DIAH.ST",
    "symbol": "DIAH.ST"
  },
  {
    "name": "Dignitana AB (publ.)",
    "displaySymbol": "DIGN.ST",
    "symbol": "DIGN.ST"
  },
  {
    "name": "Drillcon AB (publ)",
    "displaySymbol": "DRIL.ST",
    "symbol": "DRIL.ST"
  },
  {
    "name": "Duroc AB (publ)",
    "displaySymbol": "DURC.B.ST",
    "symbol": "DURC.B.ST"
  },
  {
    "name": "Elekta AB (publ)",
    "displaySymbol": "EKTA.B.ST",
    "symbol": "EKTA.B.ST"
  },
  {
    "name": "Elanders AB (publ)",
    "displaySymbol": "ELAN.B.ST",
    "symbol": "ELAN.B.ST"
  },
  {
    "name": "Ellen AB (publ)",
    "displaySymbol": "ELN.ST",
    "symbol": "ELN.ST"
  },
  {
    "name": "Elos Medtech AB (publ)",
    "displaySymbol": "ELOS.B.ST",
    "symbol": "ELOS.B.ST"
  },
  {
    "name": "AB Electrolux (publ)",
    "displaySymbol": "ELUX.A.ST",
    "symbol": "ELUX.A.ST"
  },
  {
    "name": "AB Electrolux (publ)",
    "displaySymbol": "ELUX.B.ST",
    "symbol": "ELUX.B.ST"
  },
  {
    "name": "Embracer Group AB (publ)",
    "displaySymbol": "EMBRAC.B.ST",
    "symbol": "EMBRAC.B.ST"
  },
  {
    "name": "Eniro AB (publ)",
    "displaySymbol": "ENRO.PREF.ST",
    "symbol": "ENRO.PREF.ST"
  },
  {
    "name": "Enzymatica AB",
    "displaySymbol": "ENZY.ST",
    "symbol": "ENZY.ST"
  },
  {
    "name": "Eolus Vind AB (publ)",
    "displaySymbol": "EOLU.B.ST",
    "symbol": "EOLU.B.ST"
  },
  {
    "name": "Epiroc AB (publ)",
    "displaySymbol": "EPI.A.ST",
    "symbol": "EPI.A.ST"
  },
  {
    "name": "Epiroc AB (publ)",
    "displaySymbol": "EPI.B.ST",
    "symbol": "EPI.B.ST"
  },
  {
    "name": "Episurf Medical AB (publ)",
    "displaySymbol": "EPIS.B.ST",
    "symbol": "EPIS.B.ST"
  },
  {
    "name": "Electrolux Professional AB (publ)",
    "displaySymbol": "EPRO.B.ST",
    "symbol": "EPRO.B.ST"
  },
  {
    "name": "EQT AB (publ)",
    "displaySymbol": "EQT.ST",
    "symbol": "EQT.ST"
  },
  {
    "name": "Telefonaktiebolaget LM Ericsson (publ)",
    "displaySymbol": "ERIC.A.ST",
    "symbol": "ERIC.A.ST"
  },
  {
    "name": "Telefonaktiebolaget LM Ericsson (publ)",
    "displaySymbol": "ERIC.B.ST",
    "symbol": "ERIC.B.ST"
  },
  {
    "name": "Essity AB (publ)",
    "displaySymbol": "ESSITY.A.ST",
    "symbol": "ESSITY.A.ST"
  },
  {
    "name": "Essity AB (publ)",
    "displaySymbol": "ESSITY.B.ST",
    "symbol": "ESSITY.B.ST"
  },
  {
    "name": "Fingerprint Cards AB (publ)",
    "displaySymbol": "FING.B.ST",
    "symbol": "FING.B.ST"
  },
  {
    "name": "Firefly AB (publ)",
    "displaySymbol": "FIRE.ST",
    "symbol": "FIRE.ST"
  },
  {
    "name": "Flex LNG Ltd",
    "displaySymbol": "FLNGO.ST",
    "symbol": "FLNGO.ST"
  },
  {
    "name": "FM Mattsson Mora Group AB (publ)",
    "displaySymbol": "FMM.B.ST",
    "symbol": "FMM.B.ST"
  },
  {
    "name": "Fenix Outdoor International AG",
    "displaySymbol": "FOI.B.ST",
    "symbol": "FOI.B.ST"
  },
  {
    "name": "FastPartner AB (publ)",
    "displaySymbol": "FPAR.PREF.ST",
    "symbol": "FPAR.PREF.ST"
  },
  {
    "name": "Generic Sweden AB",
    "displaySymbol": "GENI.ST",
    "symbol": "GENI.ST"
  },
  {
    "name": "Genovis AB (publ)",
    "displaySymbol": "GENO.ST",
    "symbol": "GENO.ST"
  },
  {
    "name": "Getinge AB",
    "displaySymbol": "GETI.B.ST",
    "symbol": "GETI.B.ST"
  },
  {
    "name": "Gaming Innovation Group Inc",
    "displaySymbol": "GIGSEK.ST",
    "symbol": "GIGSEK.ST"
  },
  {
    "name": "GomSpace Group AB (publ)",
    "displaySymbol": "GOMX.ST",
    "symbol": "GOMX.ST"
  },
  {
    "name": "Genova Property Group AB (publ)",
    "displaySymbol": "GPG.PREF.ST",
    "symbol": "GPG.PREF.ST"
  },
  {
    "name": "Green Landscaping Group AB (publ)",
    "displaySymbol": "GREEN.ST",
    "symbol": "GREEN.ST"
  },
  {
    "name": "Havsfrun Investment AB (publ)",
    "displaySymbol": "HAV.B.ST",
    "symbol": "HAV.B.ST"
  },
  {
    "name": "HEBA Fastighets AB (publ)",
    "displaySymbol": "HEBA.B.ST",
    "symbol": "HEBA.B.ST"
  },
  {
    "name": "Hexagon AB (publ)",
    "displaySymbol": "HEXA.B.ST",
    "symbol": "HEXA.B.ST"
  },
  {
    "name": "H \u0026 M Hennes \u0026 Mauritz AB (publ)",
    "displaySymbol": "HM.B.ST",
    "symbol": "HM.B.ST"
  },
  {
    "name": "Hansa Biopharma AB (publ)",
    "displaySymbol": "HNSA.ST",
    "symbol": "HNSA.ST"
  },
  {
    "name": "Holmen AB (publ)",
    "displaySymbol": "HOLM.A.ST",
    "symbol": "HOLM.A.ST"
  },
  {
    "name": "Holmen AB (publ)",
    "displaySymbol": "HOLM.B.ST",
    "symbol": "HOLM.B.ST"
  },
  {
    "name": "HEXPOL AB (publ)",
    "displaySymbol": "HPOL.B.ST",
    "symbol": "HPOL.B.ST"
  },
  {
    "name": "Hufvudstaden AB (publ)",
    "displaySymbol": "HUFV.A.ST",
    "symbol": "HUFV.A.ST"
  },
  {
    "name": "Hufvudstaden AB (publ)",
    "displaySymbol": "HUFV.C.ST",
    "symbol": "HUFV.C.ST"
  },
  {
    "name": "Husqvarna AB (publ)",
    "displaySymbol": "HUSQ.A.ST",
    "symbol": "HUSQ.A.ST"
  },
  {
    "name": "Husqvarna AB (publ)",
    "displaySymbol": "HUSQ.B.ST",
    "symbol": "HUSQ.B.ST"
  },
  {
    "name": "IAR Systems Group AB (publ)",
    "displaySymbol": "IAR.B.ST",
    "symbol": "IAR.B.ST"
  },
  {
    "name": "Infant Bacterial Therapeutics AB (publ)",
    "displaySymbol": "IBT.B.ST",
    "symbol": "IBT.B.ST"
  },
  {
    "name": "Impact Coatings AB (publ)",
    "displaySymbol": "IMPC.ST",
    "symbol": "IMPC.ST"
  },
  {
    "name": "AB Industrivarden (publ)",
    "displaySymbol": "INDU.A.ST",
    "symbol": "INDU.A.ST"
  },
  {
    "name": "AB Industrivarden (publ)",
    "displaySymbol": "INDU.C.ST",
    "symbol": "INDU.C.ST"
  },
  {
    "name": "Inission AB (publ)",
    "displaySymbol": "INISS.B.ST",
    "symbol": "INISS.B.ST"
  },
  {
    "name": "Investor AB (publ)",
    "displaySymbol": "INVE.A.ST",
    "symbol": "INVE.A.ST"
  },
  {
    "name": "Investor AB (publ)",
    "displaySymbol": "INVE.B.ST",
    "symbol": "INVE.B.ST"
  },
  {
    "name": "ITAB Shop Concept AB (publ)",
    "displaySymbol": "ITAB.B.ST",
    "symbol": "ITAB.B.ST"
  },
  {
    "name": "Ivisys AB (publ)",
    "displaySymbol": "IVISYS.ST",
    "symbol": "IVISYS.ST"
  },
  {
    "name": "Jays Group AB (publ)",
    "displaySymbol": "JAYS.ST",
    "symbol": "JAYS.ST"
  },
  {
    "name": "Jetpak Top Holding AB (publ)",
    "displaySymbol": "JETPAK.ST",
    "symbol": "JETPAK.ST"
  },
  {
    "name": "JLT Mobile Computers AB (publ)",
    "displaySymbol": "JLT.ST",
    "symbol": "JLT.ST"
  },
  {
    "name": "John Mattson Fastighetsforetagen AB (publ)",
    "displaySymbol": "JOMA.ST",
    "symbol": "JOMA.ST"
  },
  {
    "name": "K2A Knaust \u0026 Andersson Fastigheter AB (publ)",
    "displaySymbol": "K2A.B.ST",
    "symbol": "K2A.B.ST"
  },
  {
    "name": "KABE Group AB (publ.)",
    "displaySymbol": "KABE.B.ST",
    "symbol": "KABE.B.ST"
  },
  {
    "name": "Kancera AB (publ)",
    "displaySymbol": "KAN.ST",
    "symbol": "KAN.ST"
  },
  {
    "name": "Karnov Group AB (publ)",
    "displaySymbol": "KAR.ST",
    "symbol": "KAR.ST"
  },
  {
    "name": "Kentima Holding AB (publ)",
    "displaySymbol": "KENH.ST",
    "symbol": "KENH.ST"
  },
  {
    "name": "K-Fast Holding AB (publ)",
    "displaySymbol": "KFAST.B.ST",
    "symbol": "KFAST.B.ST"
  },
  {
    "name": "Kindred Group plc",
    "displaySymbol": "KIND.SDB.ST",
    "symbol": "KIND.SDB.ST"
  },
  {
    "name": "Kinnevik AB",
    "displaySymbol": "KINV.A.ST",
    "symbol": "KINV.A.ST"
  },
  {
    "name": "Kinnevik AB",
    "displaySymbol": "KINV.B.ST",
    "symbol": "KINV.B.ST"
  },
  {
    "name": "Klovern AB (publ)",
    "displaySymbol": "KLOV.A.ST",
    "symbol": "KLOV.A.ST"
  },
  {
    "name": "Klovern AB (publ)",
    "displaySymbol": "KLOV.B.ST",
    "symbol": "KLOV.B.ST"
  },
  {
    "name": "Klovern AB (publ)",
    "displaySymbol": "KLOV.PREF.ST",
    "symbol": "KLOV.PREF.ST"
  },
  {
    "name": "Kopparbergs Bryggeri AB",
    "displaySymbol": "KOBR.ST",
    "symbol": "KOBR.ST"
  },
  {
    "name": "Kopy Goldfields AB (publ)",
    "displaySymbol": "KOPY.ST",
    "symbol": "KOPY.ST"
  },
  {
    "name": "Lagercrantz Group AB (publ)",
    "displaySymbol": "LAGR.B.ST",
    "symbol": "LAGR.B.ST"
  },
  {
    "name": "Lammhults Design Group AB (publ)",
    "displaySymbol": "LAMM.B.ST",
    "symbol": "LAMM.B.ST"
  },
  {
    "name": "Investment AB Latour (publ)",
    "displaySymbol": "LATO.B.ST",
    "symbol": "LATO.B.ST"
  },
  {
    "name": "LIDDS AB (publ)",
    "displaySymbol": "LIDDS.ST",
    "symbol": "LIDDS.ST"
  },
  {
    "name": "Lifco AB (publ)",
    "displaySymbol": "LIFCO.B.ST",
    "symbol": "LIFCO.B.ST"
  },
  {
    "name": "Lime Technologies AB (publ)",
    "displaySymbol": "LIME.ST",
    "symbol": "LIME.ST"
  },
  {
    "name": "Loomis AB (publ)",
    "displaySymbol": "LOOM.B.ST",
    "symbol": "LOOM.B.ST"
  },
  {
    "name": "L E Lundbergforetagen AB (publ)",
    "displaySymbol": "LUND.B.ST",
    "symbol": "LUND.B.ST"
  },
  {
    "name": "Lundin Energy AB",
    "displaySymbol": "LUNE.ST",
    "symbol": "LUNE.ST"
  },
  {
    "name": "Maha Energy AB (publ)",
    "displaySymbol": "MAHA.A.ST",
    "symbol": "MAHA.A.ST"
  },
  {
    "name": "Mangold Fondkommission AB",
    "displaySymbol": "MANG.ST",
    "symbol": "MANG.ST"
  },
  {
    "name": "Medicover AB (publ)",
    "displaySymbol": "MCOV.B.ST",
    "symbol": "MCOV.B.ST"
  },
  {
    "name": "Malmbergs Elektriska AB (publ)",
    "displaySymbol": "MEAB.B.ST",
    "symbol": "MEAB.B.ST"
  },
  {
    "name": "Millicom International Cellular S.A",
    "displaySymbol": "MIC.SDB.ST",
    "symbol": "MIC.SDB.ST"
  },
  {
    "name": "Midsummer AB (publ)",
    "displaySymbol": "MIDS.ST",
    "symbol": "MIDS.ST"
  },
  {
    "name": "Midway Holding AB (publ)",
    "displaySymbol": "MIDW.A.ST",
    "symbol": "MIDW.A.ST"
  },
  {
    "name": "Midway Holding AB (publ)",
    "displaySymbol": "MIDW.B.ST",
    "symbol": "MIDW.B.ST"
  },
  {
    "name": "Momentum Group AB (publ)",
    "displaySymbol": "MMGR.B.ST",
    "symbol": "MMGR.B.ST"
  },
  {
    "name": "Micro Systemation AB (publ)",
    "displaySymbol": "MSAB.B.ST",
    "symbol": "MSAB.B.ST"
  },
  {
    "name": "Midsona AB (publ)",
    "displaySymbol": "MSON.A.ST",
    "symbol": "MSON.A.ST"
  },
  {
    "name": "Midsona AB (publ)",
    "displaySymbol": "MSON.B.ST",
    "symbol": "MSON.B.ST"
  },
  {
    "name": "Modern Times Group Mtg AB",
    "displaySymbol": "MTG.A.ST",
    "symbol": "MTG.A.ST"
  },
  {
    "name": "Modern Times Group Mtg AB",
    "displaySymbol": "MTG.B.ST",
    "symbol": "MTG.B.ST"
  },
  {
    "name": "Medivir AB (publ)",
    "displaySymbol": "MVIR.B.ST",
    "symbol": "MVIR.B.ST"
  },
  {
    "name": "NCC AB (publ)",
    "displaySymbol": "NCC.A.ST",
    "symbol": "NCC.A.ST"
  },
  {
    "name": "NCC AB (publ)",
    "displaySymbol": "NCC.B.ST",
    "symbol": "NCC.B.ST"
  },
  {
    "name": "NORDEA BANK ABP",
    "displaySymbol": "NDA.ST",
    "symbol": "NDA.ST"
  },
  {
    "name": "Nordea Bank Abp",
    "displaySymbol": "NDA.SE.ST",
    "symbol": "NDA.SE.ST"
  },
  {
    "name": "NEL Hydrogen ASA",
    "displaySymbol": "NELO.ST",
    "symbol": "NELO.ST"
  },
  {
    "name": "NetEnt AB (publ)",
    "displaySymbol": "NET.B.ST",
    "symbol": "NET.B.ST"
  },
  {
    "name": "Net Gaming Europe AB (publ)",
    "displaySymbol": "NETG.ST",
    "symbol": "NETG.ST"
  },
  {
    "name": "Net Insight AB (publ)",
    "displaySymbol": "NETI.B.ST",
    "symbol": "NETI.B.ST"
  },
  {
    "name": "New Wave Group AB (publ)",
    "displaySymbol": "NEWA.B.ST",
    "symbol": "NEWA.B.ST"
  },
  {
    "name": "Nexam Chemical Holding AB (publ)",
    "displaySymbol": "NEXAM.ST",
    "symbol": "NEXAM.ST"
  },
  {
    "name": "NIBE Industrier AB (publ)",
    "displaySymbol": "NIBE.B.ST",
    "symbol": "NIBE.B.ST"
  },
  {
    "name": "Nilsson Special Vehicles AB (publ)",
    "displaySymbol": "NILS.ST",
    "symbol": "NILS.ST"
  },
  {
    "name": "NetJobs Group AB (publ)",
    "displaySymbol": "NJOB.ST",
    "symbol": "NJOB.ST"
  },
  {
    "name": "New Nordic Healthbrands AB (publ)",
    "displaySymbol": "NNH.ST",
    "symbol": "NNH.ST"
  },
  {
    "name": "NORWEGIAN FINANS HOLDING",
    "displaySymbol": "NOFIO.ST",
    "symbol": "NOFIO.ST"
  },
  {
    "name": "Nolato AB (publ)",
    "displaySymbol": "NOLA.B.ST",
    "symbol": "NOLA.B.ST"
  },
  {
    "name": "NP3 Fastigheter AB (publ)",
    "displaySymbol": "NP3.PREF.ST",
    "symbol": "NP3.PREF.ST"
  },
  {
    "name": "Novotek AB",
    "displaySymbol": "NTEK.B.ST",
    "symbol": "NTEK.B.ST"
  },
  {
    "name": "Online Brands Nordic AB (publ)",
    "displaySymbol": "OBAB.ST",
    "symbol": "OBAB.ST"
  },
  {
    "name": "Ocean Yield AS",
    "displaySymbol": "OCYO.ST",
    "symbol": "OCYO.ST"
  },
  {
    "name": "OEM International AB (publ)",
    "displaySymbol": "OEM.B.ST",
    "symbol": "OEM.B.ST"
  },
  {
    "name": "Oscar Properties Holding AB (publ)",
    "displaySymbol": "OP.PREFB.ST",
    "symbol": "OP.PREFB.ST"
  },
  {
    "name": "Ortivus AB (publ)",
    "displaySymbol": "ORTI.B.ST",
    "symbol": "ORTI.B.ST"
  },
  {
    "name": "Photocat A/S",
    "displaySymbol": "PCAT.ST",
    "symbol": "PCAT.ST"
  },
  {
    "name": "Paradox Interactive AB (publ)",
    "displaySymbol": "PDX.ST",
    "symbol": "PDX.ST"
  },
  {
    "name": "Peab AB (publ)",
    "displaySymbol": "PEAB.B.ST",
    "symbol": "PEAB.B.ST"
  },
  {
    "name": "Pfizer Inc",
    "displaySymbol": "PFE.ST",
    "symbol": "PFE.ST"
  },
  {
    "name": "Platzer Fastigheter Holding AB (publ)",
    "displaySymbol": "PLAZ.B.ST",
    "symbol": "PLAZ.B.ST"
  },
  {
    "name": "PledPharma AB",
    "displaySymbol": "PLED.ST",
    "symbol": "PLED.ST"
  },
  {
    "name": "Pandox AB (publ)",
    "displaySymbol": "PNDX.B.ST",
    "symbol": "PNDX.B.ST"
  },
  {
    "name": "Poolia AB (publ)",
    "displaySymbol": "POOL.B.ST",
    "symbol": "POOL.B.ST"
  },
  {
    "name": "Precio Fishbone AB (publ)",
    "displaySymbol": "PRCO.B.ST",
    "symbol": "PRCO.B.ST"
  },
  {
    "name": "Prevas AB",
    "displaySymbol": "PREV.B.ST",
    "symbol": "PREV.B.ST"
  },
  {
    "name": "Pricer AB (publ)",
    "displaySymbol": "PRIC.B.ST",
    "symbol": "PRIC.B.ST"
  },
  {
    "name": "ProfilGruppen AB (publ)",
    "displaySymbol": "PROF.B.ST",
    "symbol": "PROF.B.ST"
  },
  {
    "name": "Quartiers Properties AB (publ)",
    "displaySymbol": "QUART.PREF.ST",
    "symbol": "QUART.PREF.ST"
  },
  {
    "name": "Raketech Group Holding PLC",
    "displaySymbol": "RAKE.ST",
    "symbol": "RAKE.ST"
  },
  {
    "name": "Ratos AB (publ)",
    "displaySymbol": "RATO.A.ST",
    "symbol": "RATO.A.ST"
  },
  {
    "name": "Ratos AB (publ)",
    "displaySymbol": "RATO.B.ST",
    "symbol": "RATO.B.ST"
  },
  {
    "name": "RaySearch Laboratories AB (publ)",
    "displaySymbol": "RAY.B.ST",
    "symbol": "RAY.B.ST"
  },
  {
    "name": "Recipharm AB (publ)",
    "displaySymbol": "RECI.B.ST",
    "symbol": "RECI.B.ST"
  },
  {
    "name": "Rejlers AB (publ)",
    "displaySymbol": "REJL.B.ST",
    "symbol": "REJL.B.ST"
  },
  {
    "name": "Saab AB (publ)",
    "displaySymbol": "SAAB.B.ST",
    "symbol": "SAAB.B.ST"
  },
  {
    "name": "AB Sagax (publ)",
    "displaySymbol": "SAGA.A.ST",
    "symbol": "SAGA.A.ST"
  },
  {
    "name": "AB Sagax (publ)",
    "displaySymbol": "SAGA.B.ST",
    "symbol": "SAGA.B.ST"
  },
  {
    "name": "AB Sagax (publ)",
    "displaySymbol": "SAGA.D.ST",
    "symbol": "SAGA.D.ST"
  },
  {
    "name": "AB Sagax (publ)",
    "displaySymbol": "SAGA.PREF.ST",
    "symbol": "SAGA.PREF.ST"
  },
  {
    "name": "SaltX Technology Holding AB",
    "displaySymbol": "SALT.B.ST",
    "symbol": "SALT.B.ST"
  },
  {
    "name": "Samhallsbyggnadsbolaget i Norden AB (publ)",
    "displaySymbol": "SBB.B.ST",
    "symbol": "SBB.B.ST"
  },
  {
    "name": "ScandBook Holding AB (publ)",
    "displaySymbol": "SBOK.ST",
    "symbol": "SBOK.ST"
  },
  {
    "name": "Svenska Cellulosa Aktiebolaget SCA (publ)",
    "displaySymbol": "SCA.A.ST",
    "symbol": "SCA.A.ST"
  },
  {
    "name": "Svenska Cellulosa Aktiebolaget SCA (publ)",
    "displaySymbol": "SCA.B.ST",
    "symbol": "SCA.B.ST"
  },
  {
    "name": "Skandinaviska Enskilda Banken AB (publ.)",
    "displaySymbol": "SEB.A.ST",
    "symbol": "SEB.A.ST"
  },
  {
    "name": "Skandinaviska Enskilda Banken AB (publ.)",
    "displaySymbol": "SEB.C.ST",
    "symbol": "SEB.C.ST"
  },
  {
    "name": "SECTRA B (SECT-B.ST",
    "displaySymbol": "SECT.B.ST",
    "symbol": "SECT.B.ST"
  },
  {
    "name": "Securitas AB",
    "displaySymbol": "SECU.B.ST",
    "symbol": "SECU.B.ST"
  },
  {
    "name": "Svenska Handelsbanken AB (publ)",
    "displaySymbol": "SHB.A.ST",
    "symbol": "SHB.A.ST"
  },
  {
    "name": "Svenska Handelsbanken AB (publ)",
    "displaySymbol": "SHB.B.ST",
    "symbol": "SHB.B.ST"
  },
  {
    "name": "Sinch AB (publ)",
    "displaySymbol": "SINCH.ST",
    "symbol": "SINCH.ST"
  },
  {
    "name": "Skanska AB (publ)",
    "displaySymbol": "SKA.B.ST",
    "symbol": "SKA.B.ST"
  },
  {
    "name": "AB SKF (publ)",
    "displaySymbol": "SKF.A.ST",
    "symbol": "SKF.A.ST"
  },
  {
    "name": "AB SKF (publ)",
    "displaySymbol": "SKF.B.ST",
    "symbol": "SKF.B.ST"
  },
  {
    "name": "SkiStar AB (publ)",
    "displaySymbol": "SKIS.B.ST",
    "symbol": "SKIS.B.ST"
  },
  {
    "name": "Skane-mollan AB (publ)",
    "displaySymbol": "SKMO.ST",
    "symbol": "SKMO.ST"
  },
  {
    "name": "ShaMaran Petroleum Corp",
    "displaySymbol": "SNM.ST",
    "symbol": "SNM.ST"
  },
  {
    "name": "Softronic AB",
    "displaySymbol": "SOF.B.ST",
    "symbol": "SOF.B.ST"
  },
  {
    "name": "Speqta AB (publ)",
    "displaySymbol": "SPEQT.ST",
    "symbol": "SPEQT.ST"
  },
  {
    "name": "Serneke Group AB (publ)",
    "displaySymbol": "SRNKE.B.ST",
    "symbol": "SRNKE.B.ST"
  },
  {
    "name": "SSAB AB (publ)",
    "displaySymbol": "SSAB.A.ST",
    "symbol": "SSAB.A.ST"
  },
  {
    "name": "SSAB AB (publ)",
    "displaySymbol": "SSAB.B.ST",
    "symbol": "SSAB.B.ST"
  },
  {
    "name": "Diamyd Medical AB (publ)",
    "displaySymbol": "SSE94266.ST",
    "symbol": "SSE94266.ST"
  },
  {
    "name": "Starbreeze AB",
    "displaySymbol": "STAR.ST",
    "symbol": "STAR.ST"
  },
  {
    "name": "Stora Enso Oyj",
    "displaySymbol": "STE.A.ST",
    "symbol": "STE.A.ST"
  },
  {
    "name": "Stora Enso Oyj",
    "displaySymbol": "STE.R.ST",
    "symbol": "STE.R.ST"
  },
  {
    "name": "Stendorren Fastigheter AB (publ)",
    "displaySymbol": "STEF.B.ST",
    "symbol": "STEF.B.ST"
  },
  {
    "name": "Stille AB",
    "displaySymbol": "STIL.ST",
    "symbol": "STIL.ST"
  },
  {
    "name": "Svedbergs i Dalstorp AB (publ)",
    "displaySymbol": "SVED.B.ST",
    "symbol": "SVED.B.ST"
  },
  {
    "name": "Svolder AB (publ)",
    "displaySymbol": "SVOL.A.ST",
    "symbol": "SVOL.A.ST"
  },
  {
    "name": "Svolder AB (publ)",
    "displaySymbol": "SVOL.B.ST",
    "symbol": "SVOL.B.ST"
  },
  {
    "name": "Sweco AB (publ)",
    "displaySymbol": "SWEC.A.ST",
    "symbol": "SWEC.A.ST"
  },
  {
    "name": "Sweco AB (publ)",
    "displaySymbol": "SWEC.B.ST",
    "symbol": "SWEC.B.ST"
  },
  {
    "name": "Swedbank AB (publ)",
    "displaySymbol": "SWED.A.ST",
    "symbol": "SWED.A.ST"
  },
  {
    "name": "Swedol AB",
    "displaySymbol": "SWOL.B.ST",
    "symbol": "SWOL.B.ST"
  },
  {
    "name": "Tele2 AB (publ)",
    "displaySymbol": "TEL2.A.ST",
    "symbol": "TEL2.A.ST"
  },
  {
    "name": "Tele2 AB (publ)",
    "displaySymbol": "TEL2.B.ST",
    "symbol": "TEL2.B.ST"
  },
  {
    "name": "TerraNet Holding AB (publ)",
    "displaySymbol": "TERRNT.B.ST",
    "symbol": "TERRNT.B.ST"
  },
  {
    "name": "Millicom International Cellular S.A",
    "displaySymbol": "TIGO.SDB.ST",
    "symbol": "TIGO.SDB.ST"
  },
  {
    "name": "AB Traction",
    "displaySymbol": "TRAC.B.ST",
    "symbol": "TRAC.B.ST"
  },
  {
    "name": "Trelleborg AB (publ)",
    "displaySymbol": "TREL.B.ST",
    "symbol": "TREL.B.ST"
  },
  {
    "name": "Fastighets AB Trianon (publ)",
    "displaySymbol": "TRIAN.B.ST",
    "symbol": "TRIAN.B.ST"
  },
  {
    "name": "Unlimited Travel Group UTG AB (publ)",
    "displaySymbol": "UTG.ST",
    "symbol": "UTG.ST"
  },
  {
    "name": "VBG Group AB (publ)",
    "displaySymbol": "VBG.B.ST",
    "symbol": "VBG.B.ST"
  },
  {
    "name": "Veoneer, Inc",
    "displaySymbol": "VNE.SDB.ST",
    "symbol": "VNE.SDB.ST"
  },
  {
    "name": "Vostok New Ventures Ltd",
    "displaySymbol": "VNV.SDB.ST",
    "symbol": "VNV.SDB.ST"
  },
  {
    "name": "Volati AB",
    "displaySymbol": "VOLO.PREF.ST",
    "symbol": "VOLO.PREF.ST"
  },
  {
    "name": "AB Volvo (publ)",
    "displaySymbol": "VOLV.A.ST",
    "symbol": "VOLV.A.ST"
  },
  {
    "name": "AB Volvo (publ)",
    "displaySymbol": "VOLV.B.ST",
    "symbol": "VOLV.B.ST"
  },
  {
    "name": "Venue Retail Group AB",
    "displaySymbol": "VRG.B.ST",
    "symbol": "VRG.B.ST"
  },
  {
    "name": "Viking Supply Ships AB (publ)",
    "displaySymbol": "VSSAB.B.ST",
    "symbol": "VSSAB.B.ST"
  },
  {
    "name": "Wallenstam AB (publ)",
    "displaySymbol": "WALL.B.ST",
    "symbol": "WALL.B.ST"
  },
  {
    "name": "WeSC AB (publ)",
    "displaySymbol": "WESC.ST",
    "symbol": "WESC.ST"
  },
  {
    "name": "XACT Bear ETF",
    "displaySymbol": "XACT.BEAR.ST",
    "symbol": "XACT.BEAR.ST"
  },
  {
    "name": "XACT Bear 2",
    "displaySymbol": "XACT.BEAR-2.ST",
    "symbol": "XACT.BEAR-2.ST"
  },
  {
    "name": "XACT Bull",
    "displaySymbol": "XACT.BULL.ST",
    "symbol": "XACT.BULL.ST"
  },
  {
    "name": "XACT Bull 2",
    "displaySymbol": "XACT.BULL-2.ST",
    "symbol": "XACT.BULL-2.ST"
  },
  {
    "name": "XACT OMXS30",
    "displaySymbol": "XACT.OMXS30.ST",
    "symbol": "XACT.OMXS30.ST"
  },
  {
    "name": "XACT Högutdelande",
    "displaySymbol": "XACTHDIV.ST",
    "symbol": "XACTHDIV.ST"
  },
  {
    "name": "XANO Industri AB (publ)",
    "displaySymbol": "XANO.B.ST",
    "symbol": "XANO.B.ST"
  },
  {
    "name": "XXL ASA",
    "displaySymbol": "XXLO.ST",
    "symbol": "XXLO.ST"
  },
  {
    "name": "Yara International ASA",
    "displaySymbol": "YARO.ST",
    "symbol": "YARO.ST"
  }
])