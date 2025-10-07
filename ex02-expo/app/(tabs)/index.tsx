import {View, Text, Image} from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "beige",
        padding: 20, 
      }}
    >
      <Image
        source={require('../../assets/images/foto de perfil.jpg')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontWeight: 'bold' }}>Nunno Wakiyama Diniz Carvalho</Text>
      <Text style={{ fontWeight: 'bold' }}>RA: 00000849115</Text>

      <Text style={{ marginTop: 20, textAlign: 'justify' }}> Sou estudante de Ciência da Computação, atualmente cursando o 5º período, com grande interesse em ingressar no mercado de trabalho e adquirir experiência prática na área de tecnologia. No último ano, participei de um projeto de Iniciação Científica (PIBIC - voluntário), onde fui responsável pelo treinamento de uma rede neural para detecção de patologias em edificações, experiência que me proporcionou contato direto com inteligência artificial e aprendizado de máquina. </Text>

      <Text style={{ marginTop: 10, textAlign: 'justify' }}> Com o término desse projeto, estou em busca de novas oportunidades que me permitam transformar minhas habilidades em resultados reais, gerar renda e impulsionar minha carreira profissional. Sou comunicativo, proativo, tenho facilidade em trabalhar em equipe e me comprometo com dedicação e esforço em tudo o que faço. </Text>

      <Text style={{ fontStyle: 'italic', marginTop: 20 }}>nunnowdcarvalho@gmail.com</Text>
      <Text style={{ fontStyle: 'italic', marginTop: 5 }}>LinkedIn: nunnowakiyama</Text>
      <Text style={{ fontStyle: 'italic', marginTop: 5 }}>Github: nunnowdc</Text>
    </View>
  );
}