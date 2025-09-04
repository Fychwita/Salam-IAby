import React from 'react';
import { motion } from 'framer-motion';
import madaImg from '../assets/foko.jpg';
import fokoImg from '../assets/foko2.jpg';
import ombyImg from '../assets/foko3.jpg';

const sections = [
  {
    titre: 'Nosy iray, feo 18',
    texte: `Tsy toerana fotsiny ho an'ny mpizaha tany, biby tsy fahita firy, na hakanton'ny tontolo iainana i Madagasikara. Tany feno tantara izy io, nosy iray izay miroborobo amin'ny fiteny malagasy amin'ny fiteny sy fomban-drazana samihafa, izay entin'ny mponina sy ny faritra tsirairay, sady lova ara-kolontsaina mivantana.

Avy avaratra ka hatrany atsimo, avy atsinanana ka hatrany andrefana, samy manana ny fomba fiteniny ny faritra tsirairay eto Madagasikara — fiteny izay niforona nandritra ny taonjato maro, niova tamin'ny fifandraisana sy fifampizarana, voakasiky ny fifindra-monina, ny toetrandro, ny endriky ny tany, ary ny fomban-drazana. Ireo fiteny 18 ireo, na dia samy hafa aza endrika, dia mifameno amin'ny fototra iray iraisana mampiray ny Malagasy tsy mijanona amin'ny faritra.

Ny feo tsirairay, ny accent, ary ny teny tsirairay dia taratry ny kolontsaina manokana. Ny fitenin'ny Highlands, hentitra sy voafaritra, mifanohitra amin'ny rindra sy ny hasarobidin'ny fitenin'ny morontsiraka, izay malalaka sy feno sary an-tsaina. Tsy sakana ireo fahasamihafana ireo fa tetezana mankany amin'ny fahatakarana sy fanajàna ny harena ara-kolontsaina.

Ireo fiteny ireo no mpiambina ny angano, fahendrena, hira, ary ohabolana. Milaza izay maha-izy antsika, izay niaviana, ary izay ifampizarantsika izy ireo. Tsipika mampiray ny maha-izy ny firenena isan-karazany.

Noho izany, i Madagasikara miaraka amin'ireo feo 18, mampianatra antsika fa tsy avy amin'ny fitoviana ny firaisan-kina fa avy amin'ny fanajana sy fankalazana ny fahasamihafana tsirairay. Satria eo amin'ny fon'ny nosy manana endrika arivo, isaky ny feo dia manana lanja lehibe.`,
    image: madaImg,
  },
  {
    titre: 'Fiteny, fitaratry ny fiaraha-monina',
    texte:
      "Avy amin'ny Merina any an-tampon-tany ka hatrany amin'ny Vezo mpanjono any atsimo-andrefana, ny fiteny tsirairay dia fanehoana ny fomba fiainana. Miovaova ny teny sy ny accent, fa samy mitantara kolontsaina sy fifandraisana manokana amin'ny tany, ranomasina, ary natiora.",
    image: fokoImg,
  },
  {
    titre: 'Fiteny manana fototra lalina sy elatra misokatra',
    texte:
      "Na dia iraisana amin'ny sekoly sy haino aman-jery aza ny fiteny malagasy, dia avy amin'ny fototra sy ny foko tsirairay no ahazoany ny hasin'ny maha-izy azy. Ny fiteny tsirairay dia fahatsiarovana velona sy lova nentin'ny taranaka ho taranaka, mitombo amin-kalalahana sy fitiavana ny teny.",
    image: ombyImg,
  },
];

export default function Explore() {
  return (
    <div className="bg-gradient-to-tr from-[#f3e7fa] via-[#e0f7fa] to-[#f9fbe7] p-10">
      <div className="min-h-screen bg-gradient-to-tr from-[#f3e7fa] via-[#e0f7fa] to-[#f9fbe7] p-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent"
        >
          Diniho i Madagasikara amin'ny alalan'ny fiteniny
        </motion.h2>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(80,0,120,0.15)" }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2 p-8">
              <motion.img
                src={section.image}
                alt={section.titre}
                className="rounded-xl shadow-md object-contain mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="md:w-1/2 space-y-4 p-8">
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 * index }}
                className="text-2xl font-semibold text-green-700"
              >
                {section.titre}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 * index }}
                className="text-gray-700 text-justify leading-relaxed"
              >
                {section.texte}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
