import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const TelaAlimento = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const navigation = useNavigation();

  const handleAdicionar = () => {
    console.log('Item selecionado:', selectedItem1);
    console.log('Início:', inicio);
    console.log('Fim:', fim);
  };

  // Função para formatar a entrada de horas e minutos
  const formatarHoraMinuto = (text) => {
    // Remover caracteres não numéricos
    const formattedText = text.replace(/\D/g, '');
    // Adicionar ":" entre os dois primeiros dígitos, se necessário
    if (formattedText.length > 2) {
      return `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    } else {
      return formattedText;
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={styles.iconBack} />
      <Text style={styles.titulo}>Alimento</Text>  
      <Icon name="baby-bottle" size={50} color="#000" style={styles.icon} />
           
      <DropDownPicker
        items={[
          { label: 'Amadeira', value: 'Amadeira' },
          { label: 'Papinha', value: 'Papinha' },
          { label: 'Mamadeira', value: 'Mamadeira' }
        ]}
        defaultValue={null}
        placeholder="Selecione"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        open={open1}
        setOpen={setOpen1}
        value={selectedItem1}
        setValue={setSelectedItem1}
        zIndex={2000}
        zIndexInverse={2000}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Início (hh:mm)"
          value={inicio}
          onChangeText={(text) => setInicio(formatarHoraMinuto(text))}
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={styles.input}
          placeholder="Fim (hh:mm)"
          value={fim}
          onChangeText={(text) => setFim(formatarHoraMinuto(text))}
          keyboardType="numeric"
          maxLength={5}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar"
          color='#30cfa9'
          onPress={handleAdicionar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Margem inferior do título
    marginTop: -300, // Margem superior do título, ajustada para alinhar com a borda superior
},
  icone: {
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#ffb6c1',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  dropdownMenu: {
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '48%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: { /*botao adicionar*/
  width: '80%',
  marginBottom: 20, // Ajuste a margem inferior conforme necessário
  marginTop: 70, // Mover o botão "Adicionar" um pouco para cima
  borderRadius: 5,
  overflow: 'hidden',
  backgroundColor: '#30cfa9',
},
  iconBack: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default TelaAlimento;
