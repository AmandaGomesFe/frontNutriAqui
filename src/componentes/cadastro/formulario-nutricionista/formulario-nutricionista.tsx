import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInputMask } from "react-native-masked-text";

function validarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g,'');
    
    if (cpf === '' || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      return false;
    }
  
    // Calcula os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
  
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
  
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
}

export default function FormularioNutricionista() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [formacaoAcademica, setformacaoAcademica] = useState('');
    const [crn, setCRN] = useState('');
    const [emailValido, setEmailValido] = useState(true);
    const [cpfValido, setCpfValido] = useState(true);
    const [botaoHabilitado, setBotaoHabilitado] = useState(false);

    const submit = () => {
        console.log("aquiiii form"),
        console.log("Nome ", nome);
        console.log("Email ", email);
        console.log("Telefone ", telefone);
        console.log("cpf ", cpf),
        console.log("formacao ", formacaoAcademica);
    }

    const validarEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailValido(emailRegex.test(email));
    }

    const validaCpf = () => {
        setCpfValido(validarCPF(cpf));
    }

    const verificarCampos = () => {
        if(cpfValido && cpf.trim() 
            !== '' && nome.trim() !== '' 
            && telefone.trim() !== '' 
            && formacaoAcademica.trim() !== '' 
            && emailValido) 
        {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        setBotaoHabilitado(verificarCampos());
    }, [nome, email, telefone, cpf, formacaoAcademica]);

    return (
        <ScrollView style={style.background}>
            <ImageBackground source={require('../../../assets/imagemBackground.png')} resizeMode="cover" style={style.imagemFundo}>
                <View style={style.inputsContainer}>
                    <Image style={style.imagem} source={require('../../../assets/logoNutriAqui.png')}></Image>

                    <Text style={style.text}>Nome completo</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite aqui..."
                        onChangeText={(nome) => setNome(nome)}>
                    </TextInput>

                    <Text style={style.text}>Formação Acadêmica</Text>
                    <TextInput
                        onChangeText={(formacaoAcademica) => setformacaoAcademica(formacaoAcademica)}
                        style={style.input}/>
                    <Text style={style.text}>Email</Text>
        
                    <TextInput
                        onBlur={validarEmail}
                        onChangeText={(email) => setEmail(email)}
                        style={style.input}
                        placeholder="nutriAqui@email.com"
                    ></TextInput>
                    {emailValido !== true && <Text style={style.mensagemErro}>Email Inválido</Text>}

                    <Text style={style.text}>CPF</Text>
                    <TextInputMask
                        type={'cpf'}
                        onChangeText={(cpf) => setCpf(cpf)}
                        onBlur={validaCpf}
                        style={style.input}
                        placeholder="000.000.000-00"
                        keyboardType="numeric"
                        maxLength={14}
                    />
                    {cpfValido !== true && <Text style={style.mensagemErro}>CPF Inválido</Text>}

                    <Text style={style.text}>CRN</Text>
                    <TextInput
                        onChangeText={(crn) => setCRN(crn)}
                        style={style.input}
                    ></TextInput>

                    <Text style={style.text}>Telefone</Text>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        onChangeText={(telefone) => setTelefone(telefone)}
                        style={style.input}
                        placeholder="(00) 00000-0000"
                        keyboardType="numeric"
                        maxLength={14}
                    />

                    <TouchableOpacity 
                        style={botaoHabilitado ? style.btnCadastrar : style.btnDesabilitado} 
                        onPress={submit}
                        disabled={!botaoHabilitado}>
                        <Text style={style.textBtn} >Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#404040',
        height: '100%',
        paddingBottom: 60
    },
    imagemFundo: {
        height: '100%'
    },
    imagem: {
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#EAEAEA',
        borderRadius: 15,
        width: '80%',
        fontSize: 16,
        paddingStart: 15,
        height: 45,
    },
    inputsContainer: {
        height: '90%',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },
    containerButton: {
        alignItems: 'center',
    },
    btnCadastrar: {
        backgroundColor: '#FF8642',
        width: '60%',
        borderRadius: 10,
        padding: 15,
        marginTop: 60,
        marginBottom: 50
    },
    btnDesabilitado: {
        opacity: 0.8,
        backgroundColor: '#FF8642',
        width: '60%',
        borderRadius: 10,
        padding: 15,
        marginTop: 60,
        marginBottom: 50
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mensagemErro: {
        color: 'red',
        fontSize: 17
    }
});