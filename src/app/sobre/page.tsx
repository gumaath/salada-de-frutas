import { VT323 } from 'next/font/google';

const vt = VT323({
  subsets: ['latin'],
  weight: '400'
})

export default function Sobre() {
  return (
    <div className='text-black flex items-center justify-center text-center flex-col'>
      <div className='flex w-1/2 flex-col'>
        <h3 className={`${vt.className} letraTitulo`}>QUEM SOMOS NÓS?</h3>
        <p>
          Somos mais do que apenas uma &quot;panelinha&quot; ou uma &quot;tigelinha&quot; na internet. Na verdade, somos um grupo unido por uma paixão em comum: produzir conteúdo significativo e ser membros ativos de comunidades online. Acreditamos que a internet é um espaço poderoso para expressão, conexão e compartilhamento de ideias.
          <br/>
          <br/>
          No Salada de Frutas, valorizamos a individualidade de cada membro e acreditamos na importância de trazer diversidade e perspectivas únicas para o mundo digital. Nosso objetivo principal é praticar e influenciar o respeito, o amor e o autoconhecimento em tudo o que fazemos.
          <br/>
          <br/>
          Nosso grupo é composto por produtores de conteúdo talentosos e engajados, que se dedicam a criar materiais que inspirem, eduquem e entretenham nossa comunidade. Estamos constantemente explorando novas formas de expressão e experimentando diferentes formatos de conteúdo para manter nossos seguidores engajados e proporcionar experiências enriquecedoras.
          <br/>
          <br/>
          Além disso, nos orgulhamos de cultivar um ambiente acolhedor e inclusivo, onde todos são bem-vindos. Queremos criar uma comunidade onde cada indivíduo se sinta valorizado, apoiado e capaz de se expressar livremente. Acreditamos que, ao promover a diversidade de ideias e perspectivas, podemos contribuir para uma internet mais positiva e enriquecedora para todos.
          <br/>
          <br/>
          Nossa missão vai além da produção de conteúdo. Buscamos também influenciar positivamente a comunidade online, incentivando a empatia, a compaixão e o respeito mútuo. Acreditamos que, por meio da disseminação desses valores, podemos contribuir para um ambiente virtual mais saudável e construtivo.
          Seja você um criador de conteúdo, um entusiasta da internet ou alguém em busca de conexões autênticas, convidamos você a fazer parte da família Salada de Frutas. Juntos, podemos fazer a diferença e tornar a internet um lugar melhor para todos.
          <br/>
          <br/>
          Agradecemos por nos visitar e esperamos que você se junte a nós nessa jornada emocionante. Seja bem-vindo(a) ao Salada de Frutas, onde a individualidade é celebrada, o respeito é praticado e o amor é compartilhado.
        </p>
      </div>
    </div>
  )
}