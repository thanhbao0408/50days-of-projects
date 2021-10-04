import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface RotatingContentProps {
  sx?: SxProps<Theme>;
}

const RotatingContent: React.FC<RotatingContentProps & { className: string }> = (props) => {
  const { sx, className } = props;
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: (theme) => theme.palette.common.white,
        ...sx,
      }}
      className={className}
    >
      <Typography paragraph sx={{ maxWidth: '80%' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti in dolores repellat corrupti laborum quas
        error dignissimos, ex non facere quia voluptatem doloremque dolore earum laboriosam repellendus doloribus
        repudiandae voluptate, officiis iusto deserunt distinctio ipsa magni quaerat! Deserunt sint officia, hic aut
        vitae unde esse nam numquam minus voluptates voluptate iste quae aliquid! Dolor ratione omnis facilis officiis
        porro quaerat, quam eos explicabo nam, dicta blanditiis eligendi nihil odit enim iste ut modi! Animi autem
        dolores ratione modi sequi, unde iusto asperiores. Excepturi odio nobis architecto alias aliquam cupiditate
        minus, sint adipisci facilis sequi facere omnis tempore quia, dolores animi itaque ipsam non suscipit fuga
        veniam necessitatibus quas ipsa! Possimus quos deserunt molestias soluta delectus aut nulla. Necessitatibus
        numquam eligendi saepe iure illum nulla provident adipisci sapiente atque quisquam praesentium non omnis,
        debitis rerum, molestias asperiores ullam maxime eaque blanditiis dolorum nihil minima? Quod nulla,
        exercitationem, ab, veritatis iste provident dolore dolor aspernatur ut vero quas voluptatum blanditiis. Enim,
        cum reprehenderit minima commodi quia dolor in veniam obcaecati animi neque quasi ut itaque, iure vel nemo ab,
        dignissimos accusamus atque? Ex eveniet iste, expedita id error quia illum vitae perferendis nulla repellendus
        aliquid consectetur voluptas, ab similique! Nesciunt ipsum illum sint beatae, nulla quos tempora, voluptate
        dicta, reprehenderit expedita officiis iure libero. Eos, dolore? Consequatur, ipsum doloribus. Esse assumenda
        iure magnam consequuntur accusamus eveniet ipsam, nihil doloremque molestiae sequi minus, incidunt odit?
        Officiis voluptate tempora consectetur iusto, harum minima! Accusantium natus ipsa possimus magnam delectus
        dolores dolore ipsum. Non odit autem enim doloremque, neque sed, iste ipsam consequuntur labore officia tenetur
        repellendus libero voluptatum optio repellat aperiam minus placeat architecto eos saepe. Impedit ab ut
        voluptates obcaecati, eius nihil dolorem nostrum, expedita animi nisi ipsum fugit vel deserunt aliquam quaerat
        praesentium maiores quae sit eos? Aspernatur non nostrum fuga, modi explicabo expedita dolores rerum a unde
        velit earum dolor eveniet sunt sit! Amet fuga ipsum, nihil fugiat, perferendis nulla esse cum at aliquid ad
        distinctio voluptates suscipit saepe rerum obcaecati corporis. Et magni doloribus voluptatum natus quam eius
        voluptate ut nemo nobis. Distinctio beatae harum suscipit necessitatibus adipisci nisi earum ipsum, repellendus
        consequatur, culpa laboriosam. Perferendis quidem consequatur ut! Reprehenderit rerum dignissimos quas rem eaque
        corrupti? Doloremque dignissimos blanditiis temporibus. Pariatur, itaque et? Repellat accusamus quidem ad
        consequatur exercitationem numquam aliquam. Tenetur labore modi omnis quo. Vitae sapiente dolor itaque iusto
        eveniet qui id vero incidunt, omnis excepturi velit molestias ipsa repellendus. Nihil dolorem velit
        exercitationem repellendus ad, eaque nesciunt molestiae, vitae placeat excepturi aperiam quam, sequi reiciendis.
        Reprehenderit beatae nesciunt est voluptates maiores possimus nobis deserunt dolorem? Iure libero, consectetur
        placeat exercitationem sapiente sed fugiat temporibus repudiandae doloremque est magni quibusdam pariatur omnis
        autem debitis fugit voluptatibus aliquid, nobis minima harum, vel fuga. Rem quia iure atque doloribus iusto,
        voluptates exercitationem dolor architecto! Deserunt aut maiores debitis odit ducimus consequatur cupiditate
        magni. Corporis porro odio vel laborum incidunt consectetur dolor officiis eius? Itaque ad, reprehenderit iure
        unde, ducimus illo provident debitis magnam eius nihil, cum adipisci? Ex odit quis distinctio illum eum dolorum
        facere, asperiores officia est possimus eos ea, impedit quia vel. Facere ex distinctio libero at laudantium
        magni aperiam sequi accusantium, ipsa obcaecati ipsum soluta, vitae et? Voluptates odio expedita ea asperiores
        temporibus aperiam nulla commodi! Doloribus minus modi labore odio aperiam sapiente necessitatibus qui ut illum
        minima accusamus sit laboriosam veritatis, voluptatibus, nostrum a. Aliquid ratione autem facere id? Fuga
        delectus perspiciatis, dolor quidem facere pariatur sunt laborum, molestiae illo animi soluta. Asperiores, iste
        labore deleniti assumenda quis debitis alias ducimus. Consequatur, eius perferendis autem, esse ullam nulla
        ducimus ut nostrum impedit omnis et? Sint quo assumenda a maxime aliquid, similique dolore vitae perspiciatis
        voluptatem id, quod officiis possimus! Sit blanditiis, fuga vero odit distinctio atque quas facilis non animi
        modi tempora quia recusandae totam. Dignissimos pariatur itaque minus? Ullam suscipit, officiis vel neque ipsa
        nisi cumque accusantium ratione culpa veritatis ipsam eaque totam molestias exercitationem voluptas illum
        doloribus deserunt perspiciatis odit qui. Qui, ipsam illum quae rerum impedit voluptatibus quasi unde corporis
        quo magni a alias tempora obcaecati corrupti ab eaque maiores est possimus nemo minima exercitationem! Quia
        doloribus pariatur quos consectetur perferendis, sunt, facilis hic minus consequuntur eligendi architecto cumque
        ipsam quisquam vitae modi id. Quidem, culpa amet itaque dignissimos eligendi corrupti. Ratione porro nobis atque
        accusantium fugit ad inventore quasi libero facilis commodi, modi delectus ab architecto eius, error nisi fuga,
        temporibus neque molestiae officia quaerat! Sequi minus pariatur velit non esse dignissimos eius delectus,
        excepturi aliquam omnis illum sit ex debitis, eaque eos voluptas inventore! Nulla quae dignissimos cupiditate
        quasi repellendus nisi laboriosam explicabo, iste quos odio officia totam eligendi aliquam minima velit
        reiciendis mollitia deleniti? Deleniti, sed aliquid ullam adipisci iure voluptas itaque culpa ducimus expedita
        rem odit animi alias distinctio et impedit ipsum dolor repellat facilis, eos voluptates laboriosam neque. Non
        praesentium deserunt nihil quasi aperiam cupiditate suscipit fuga, tempore veniam delectus iste tenetur qui
        sapiente vero distinctio, nemo earum, natus aliquam iure enim est velit autem facilis voluptas! Ea ipsa optio
        sunt ullam, earum modi voluptates dolorum inventore, delectus numquam, repudiandae alias dolores labore
        consequuntur blanditiis exercitationem magnam rerum doloribus facere quidem fuga quia? Ex commodi incidunt magni
        ratione quasi alias animi perferendis ducimus reiciendis, eaque expedita error perspiciatis facere ut
        consequatur eligendi sed cupiditate mollitia doloribus cumque soluta? Nostrum vitae iste eos rem accusantium
        adipisci, libero suscipit expedita iusto, architecto voluptas fugit ea tenetur quidem corrupti quos! Dignissimos
        quos enim, tempore facilis explicabo perferendis in placeat corporis suscipit fugit obcaecati eligendi, deleniti
        ducimus mollitia? Doloribus culpa et debitis voluptatem provident laboriosam nihil, exercitationem dolorem quos
        eveniet esse expedita libero aliquam similique sapiente praesentium pariatur dolore perferendis eaque? Nemo
        delectus a corporis dolores nihil, qui beatae asperiores iure eveniet autem quasi, minima nesciunt vel corrupti
        quis soluta laborum nostrum quaerat voluptates quidem eaque veniam quibusdam. Quae, similique veritatis,
        asperiores amet tempore eaque cumque dignissimos voluptatum aliquam labore, autem consequatur doloribus eligendi
        incidunt eos expedita vel. Sunt minima sit porro explicabo consectetur dignissimos quo cumque similique
        consequatur blanditiis, voluptas obcaecati.
      </Typography>
    </Box>
  );
};

export default RotatingContent;
