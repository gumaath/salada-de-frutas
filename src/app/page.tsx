import MainImage from "@/components/MainImage/page"
import TextBox from "@/components/TextBox/page"
import dragons_two_persons from "../../public/assets/dragons_two_persons.png"
import person_sword from "../../public/assets/person_sword.png"
import image1 from "../../public/assets/image1.png"
import image2 from "../../public/assets/image2.png"
import people from "../../public/assets/people.png"
import TextBoxSecondary from "@/components/TextBoxSecondary/page"
import TextBoxCenter from "@/components/TextBoxCenter/page"

export default function Home() {
  return (
    <div>
      <MainImage />
      <TextBox 
        title="UM SERVIDOR, MUITAS AVENTURAS" 
        body="Bem-vindo(a) ao servidor multiplayer Salada de Frutas! Prepare-se para mergulhar em uma experiência única e emocionante no mundo do Minecraft. Somos um dos primeiros servidores a trazer toda a diversão e as novidades da versão 1.20 do jogo, e mal podemos esperar para compartilhar essa aventura com você." 
        imageSrc={dragons_two_persons} 
      />
      <TextBoxSecondary
        title="O QUE ESPERAR?" 
        body="No Salada de Frutas, a criatividade e a diversão são os ingredientes principais. Nossa comunidade é formada por criadores de conteúdo apaixonados, prontos para explorar, construir e interagir uns com os outros. Desde construções épicas até desafios empolgantes, nosso servidor oferece uma variedade de atividades para todos os tipos de jogadores." 
        imageSrc={image1}  
      />
      <TextBox 
        title="EXPLORE, EXPLORE, EXPLORE!" 
        body="Imagine-se em um mundo vibrante, repleto de biomas exuberantes, criaturas fascinantes e tesouros ocultos esperando para serem descobertos. Em nosso servidor, você encontrará uma ampla gama de recursos exclusivos, como eventos especiais, minijogos emocionantes e competições empolgantes. Trabalhe em equipe, forme alianças estratégicas ou embarque em aventuras solo para dominar o universo do Salada de Frutas." 
        imageSrc={person_sword} 
      />
      <TextBoxSecondary
        title="ESTAMOS COM VOCÊ" 
        body="Nossa equipe dedicada está empenhada em oferecer a melhor experiência de jogo possível. Estamos sempre atualizando e aprimorando nossos recursos para garantir que você tenha uma jogabilidade suave e envolvente. Além disso, promovemos um ambiente seguro e amigável, onde todos são bem-vindos para expressar sua criatividade, fazer amizades duradouras e se divertir ao máximo." 
        imageSrc={image2}  
      />
      <TextBoxCenter
        title="FAÇA PARTE!" 
        body="Se você está pronto para explorar um mundo cheio de possibilidades, desafios e muita diversão, junte-se a nós no Salada de Frutas. Prepare-se para embarcar em uma jornada incrível, conhecer jogadores apaixonados e criar memórias inesquecíveis. Não perca tempo, conecte-se agora e faça parte dessa comunidade vibrante!" 
        imageSrc={people} 
      />
    </div>
  )
}
