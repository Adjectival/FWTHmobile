import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7muglYmCvwpEdB8TPoDbc6FSJt2Ee24HGLsCNZYVXNoOl5sx-Fg'}}
            style={styles.headerImage}
        />
        <Text
            style={{
                color: 'blue'
            }}
            >Fantasy War Tactics Helper M O B I L E</Text>
        <Text
            style={{
                color: 'red'
            }}
        >Version 0.1</Text>
        <Text>Intended for Educational Purposes Only</Text>
        <Text>All IP Nexon&copy; &amp; NexonGT&copy;</Text>
        <FlatList
            style={{flex: 1}}
            data={[
                {name: "Alex", property: "Paper", type: "Balance", terr1: "Grass", terr2: "null", imgurl: "../assets/Alex", key: 31, party: false, ally1: "Deborah", ally2: "Tao", ally3: "Belle"},
                {name: "Alfred", property: "Rock", type: "AreaAttack", terr1: "Grass", terr2: "null", imgurl: "../assets/Alfred", key: 6, party: false, ally1: "Sraka", ally2: "Lilid", ally3: "Shark"},
                {name: "Amora", property: "Scissors", type: "AreaAttack", terr1: "Water", terr2: "DeepSea", imgurl: "../assets/Amora", key: 89, party: false, ally1: "Carrot", ally2: "Sione", ally3: "Gillan"},
                {name: "Angela", property: "Paper", type: "Balance", terr1: "Poison", terr2: "null", imgurl: "../assets/Angela", key: 60, party: false, ally1: "Jenny", ally2: "Jin", ally3: "Lena"},
                {name: "Aran", property: "Rock", type: "Balance", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Aran", key: 63, party: false, ally1: "Evan", ally2: "Eunwol", ally3: "Mercedes"},
                {name: "Azrael", property: "Paper", type: "Attack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Azrael", key: 68, party: false, ally1: "Chris", ally2: "Angela", ally3: "Lena"},
                {name: "Banshee", property: "Scissors", type: "Balance", terr1: "Poison", terr2: "null", imgurl: "../assets/Banshee", key: 40, party: false, ally1: "Spooky", ally2: "", ally3: ""},
                {name: "Bearman", property: "Scissors", type: "Defense", terr1: "Poison", terr2: "null", imgurl: "../assets/Bearman", key: 28, party: false, ally1: "Carrot", ally2: "Chenny", ally3: "Shu-Shu"},
                {name: "Belle", property: "Scissors", type: "Support", terr1: "Swamp", terr2: "Water", imgurl: "../assets/Belle", key: 55, party: false, ally1: "Dolores", ally2: "Hella", ally3: "Nirvana"},
                {name: "Camelia", property: "Paper", type: "Support", terr1: "Thornbush", terr2: "Grass", imgurl: "../assets/Camelia", key: 76, party: false, ally1: "Ian", ally2: "Sraka", ally3: "Krut"},
                {name: "Camila", property: "Rock", type: "Support", terr1: "Poison", terr2: "Swamp", imgurl: "../assets/Camila", key: 90, party: false, ally1: "Serendi", ally2: "Nox", ally3: "Rachel"},
                {name: "Carrot", property: "Paper", type: "Attack", terr1: "Grass", terr2: "null", imgurl: "../assets/Carrot", key: 3, party: false, ally1: "Jenny", ally2: "Serendi", ally3: "Kitty"},
                {name: "CatSidhe", property: "Rock", type: "Attack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/CatSidhe", key: 64, party: false, ally1: "Ian", ally2: "Mas", ally3: "Lena"},
                {name: "Celestial", property: "Paper", type: "Support", terr1: "Grass", terr2: "Thornbush", imgurl: "../assets/Celestial", key: 50, party: false, ally1: "Yekaterina", ally2: "Angela", ally3: "Lily"},
                {name: "Chenny", property: "Scissors", type: "Balance", terr1: "Glacier", terr2: "null", imgurl: "../assets/Chenny", key: 42, party: false, ally1: "Alfred", ally2: "Deborah", ally3: "Klein"},
                {name: "Chris", property: "Paper", type: "Defense", terr1: "Grass", terr2: "null", imgurl: "../assets/Chris", key: 16, party: false, ally1: "Lily", ally2: "Jin", ally3: "Unknown"},
                {name: "Churyeok", property: "Scissors", type: "Defense", terr1: "Water", terr2: "null", imgurl: "../assets/Churyeok", key: 87, party: false, ally1: "Lily", ally2: "Unknown", ally3: "Tao"},
                {name: "Cleo", property: "Paper", type: "Balance", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Cleo", key: 26, party: false, ally1: "Carrot", ally2: "Chenny", ally3: "Shu-Shu"},
                {name: "Deborah", property: "Scissors", type: "AreaAttack", terr1: "Poison", terr2: "null", imgurl: "../assets/Deborah", key: 4, party: false, ally1: "Alfred", ally2: "Lance", ally3: "Klein"},
                {name: "Deimos", property: "Scissors", type: "Defense", terr1: "Poison", terr2: "null", imgurl: "../assets/Deimos", key: 59, party: false, ally1: "Carrot", ally2: "Lily", ally3: "Valkyrie"},
                {name: "Dolores", property: "Paper", type: "Balance", terr1: "Lava", terr2: "null", imgurl: "../assets/Dolores", key: 17, party: false, ally1: "Kai", ally2: "Rage", ally3: "Fruel"},
                {name: "Dominique", property: "Rock", type: "Attack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Dominique", key: 23, party: false, ally1: "Henry", ally2: "Lily", ally3: "Angela"},
                {name: "Elektra", property: "Scissors", type: "Support", terr1: "Thornbush", terr2: "Glacier", imgurl: "../assets/Elektra", key: 54, party: false, ally1: "Ian", ally2: "Carrot", ally3: "Kitty"},
                {name: "Evan", property: "Scissors", type: "AreaAttack", terr1: "Lava", terr2: "null", imgurl: "../assets/Evan", key: 57, party: false, ally1: "Mercedes", ally2: "Phantom", ally3: "Luminous"},
                {name: "Eunwol", property: "Paper", type: "Defense", terr1: "Water", terr2: "null", imgurl: "../assets/Eunwol", key: 94, party: false, ally1: "Aran", ally2: "Luminous", ally3: "Evan"},
                {name: "Frankenstein", property: "Scissors", type: "Attack", terr1: "Poison", terr2: "null", imgurl: "../assets/Frankenstein", key: 24, party: false, ally1: "Seira", ally2: "Alfred", ally3: "Raskreia"},
                {name: "Fruel", property: "Scissors", type: "Attack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Fruel", key: 48, party: false, ally1: "Lily", ally2: "Azrael", ally3: "Nirvana"},
                {name: "Gillan", property: "Rock", type: "Support", terr1: "Poison", terr2: "Swamp", imgurl: "../assets/Gillan", key: 19, party: false, ally1: "Henry", ally2: "Muang", ally3: "Zero"},
                {name: "Hella", property: "Rock", type: "Support", terr1: "Water", terr2: "null", imgurl: "../assets/Hella", key: 111, party: false, ally1: "Lee", ally2: "Klein", ally3: "Unknown"},
                {name: "Henry", property: "Rock", type: "Attack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Henry", key: 34, party: false, ally1: "Dominique", ally2: "Angela", ally3: "Lily"},
                {name: "Hongyeom", property: "Rock", type: "AreaAttack", terr1: "Lava", terr2: "null", imgurl: "../assets/Hongyeom", key: 72, party: false, ally1: "Mas", ally2: "Lena", ally3: "SonicBoom"},
                {name: "Ian", property: "Rock", type: "Balance", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Ian", key: 9, party: false, ally1: "Serendi", ally2: "Jin", ally3: "Chenny"},
                {name: "Ildo", property: "Paper", type: "Defense", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Ildo", key: 71, party: false, ally1: "Hongyeom", ally2: "Ian", ally3: "Taehwa"},
                {name: "Jack", property: "Rock", type: "Defense", terr1: "Lava", terr2: "null", imgurl: "../assets/Jack", key: 12, party: false, ally1: "Lance", ally2: "Mas", ally3: "Shu-Shu"},
                {name: "Jenny", property: "Paper", type: "AreaAttack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Jenny", key: 18, party: false, ally1: "Carrot", ally2: "Rage", ally3: "Momo"},
                {name: "Jin", property: "Scissors", type: "Attack", terr1: "Lava", terr2: "null", imgurl: "../assets/Jin", key: 20, party: false, ally1: "Kai", ally2: "Rage", ally3: "Unknown"},
                {name: "JinKisaragi", property: "Rock", type: "Balance", terr1: "Glacier", terr2: "null", imgurl: "../assets/JinKisaragi", key: 95, party: false, ally1: "Ragna", ally2: "Noel", ally3: "Rachel"},
                {name: "Kai", property: "Rock", type: "Balance", terr1: "Lava", terr2: "null", imgurl: "../assets/Kai", key: 5, party: false, ally1: "Chris", ally2: "Raboff", ally3: "Mu"},
                {name: "Kitty", property: "Rock", type: "AreaAttack", terr1: "Glacier", terr2: "null", imgurl: "../assets/Kitty", key: 32, party: false, ally1: "Sraka", ally2: "Dolores", ally3: "Moa"},
                {name: "Klein", property: "Paper", type: "AreaAttack", terr1: "Lava", terr2: "null", imgurl: "../assets/Klein", key: 69, party: false, ally1: "Ian", ally2: "Jack", ally3: "Bearman"},
                {name: "Krut", property: "Rock", type: "Attack", terr1: "Lava", terr2: "null", imgurl: "../assets/Krut", key: 43, party: false, ally1: "Sraka", ally2: "Lily", ally3: "Jin"},
                {name: "KyKiske", property: "Paper", type: "Balance", terr1: "Glacier", terr2: "null", imgurl: "../assets/KyKiske", key: 79, party: false, ally1: "SolBadguy", ally2: "May", ally3: "Ramlethal"},
                {name: "Lance", property: "Scissors", type: "Defense", terr1: "Swamp", terr2: "null", imgurl: "../assets/Lance", key: 7, party: false, ally1: "Alfred", ally2: "Deborah", ally3: "Klein"},
                {name: "Lee", property: "Scissors", type: "Attack", terr1: "Glacier", terr2: "null", imgurl: "../assets/Lee", key: 67, party: false, ally1: "Moa", ally2: "Elektra", ally3: "Klein"},
                {name: "Lena", property: "Scissors", type: "Balance", terr1: "Glacier", terr2: "null", imgurl: "../assets/Lena", key: 44, party: false, ally1: "Nox", ally2: "Persona", ally3: "Fruel"},
                {name: "Lilid", property: "Rock", type: "Defense", terr1: "Poison", terr2: "null", imgurl: "../assets/Lilid", key: 30, party: false, ally1: "Ian", ally2: "Poni", ally3: "Jack"},
                {name: "Lily", property: "Paper", type: "Attack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Lily", key: 21, party: false, ally1: "Henry", ally2: "Dominique", ally3: "Angela"},
                {name: "Lucas", property: "Paper", type: "Balance", terr1: "Grass", terr2: "null", imgurl: "../assets/Lucas", key: 49, party: false, ally1: "Jack", ally2: "Ian", ally3: "Poni"},
                {name: "Luminous", property: "Scissors", type: "Support", terr1: "Glacier", terr2: "Poison", imgurl: "../assets/Luminous", key: 62, party: false, ally1: "Aran", ally2: "Eunwol", ally3: "Phantom"},
                {name: "Mas", property: "Paper", type: "Support", terr1: "Grass", terr2: "Water", imgurl: "../assets/Mas", key: 8, party: false, ally1: "Serendi", ally2: "Nox", ally3: "Fruel"},
                {name: "Mary", property: "Rock", type: "AreaAttack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Mary", key: 88, party: false, ally1: "Sione", ally2: "Lily", ally3: "Ramlethal"},
                {name: "May", property: "Scissors", type: "Attack", terr1: "Water", terr2: "null", imgurl: "../assets/May", key: 78, party: false, ally1: "SolBadguy", ally2: "KyKiske", ally3: "Ramlethal"},
                {name: "Mercedes", property: "Rock", type: "Attack", terr1: "Grass", terr2: "null", imgurl: "../assets/Mercedes", key: 58, party: false, ally1: "Evan", ally2: "Phantom", ally3: "Luminous"},
                {name: "Moa", property: "Paper", type: "AreaAttack", terr1: "Lava", terr2: "null", imgurl: "../assets/Moa", key: 29, party: false, ally1: "Elektra", ally2: "Lee", ally3: "Klein"},
                {name: "Momo", property: "Rock", type: "Attack", terr1: "Grass", terr2: "null", imgurl: "../assets/Momo", key: 1, party: false, ally1: "Bearman", ally2: "Muang", ally3: "Alex"},
                {name: "Mu", property: "Paper", type: "Balance", terr1: "Swamp", terr2: "null", imgurl: "../assets/Mu", key: 2, party: false, ally1: "Dolores", ally2: "Persona", ally3: "Tao"},
                {name: "Muzaka", property: "Rock", type: "Defense", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Muzaka", key: 80, party: false, ally1: "Kai", ally2: "SonicBoom", ally3: "Poni"},
                {name: "Muang", property: "Scissors", type: "AreaAttack", terr1: "Lava", terr2: "null", imgurl: "../assets/Muang", key: 37, party: false, ally1: "Jack", ally2: "Seira", ally3: "Raskreia"},
                {name: "Nirvana", property: "Paper", type: "Support", terr1: "Water", terr2: "Glacier", imgurl: "../assets/Nirvana", key: 47, party: false, ally1: "Hella", ally2: "Sione", ally3: "Belle"},
                {name: "Noel", property: "Rock", type: "Attack", terr1: "Grass", terr2: "null", imgurl: "../assets/Noel", key: 52, party: false, ally1: "Ragna", ally2: "JinKisaragi", ally3: "Rachel"},
                {name: "Nox", property: "Paper", type: "Attack", terr1: "Glacier", terr2: "null", imgurl: "../assets/Nox", key: 45, party: false, ally1: "Bearman", ally2: "Elektra", ally3: "Momo"},
                {name: "Parsifal", property: "Scissors", type: "Attack", terr1: "Water", terr2: "null", imgurl: "../assets/Parsifal", key: 82, party: false, ally1: "Deimos", ally2: "Valkyrie", ally3: "Chris"},
                {name: "Persona", property: "Rock", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Persona", key: 33, party: false, ally1: "SonicBoom", ally2: "Lena", ally3: "Shark"},
                {name: "Phantom", property: "Paper", type: "Balance", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Phantom", key: 56, party: false, ally1: "Evan", ally2: "Mercedes", ally3: "Luminous"},
                {name: "PinkBean", property: "Paper", type: "Attack", terr1: "Grass", terr2: "null", imgurl: "../assets/PinkBean", key: 91, party: false, ally1: "Celestial", ally2: "SonicBoom", ally3: "Moa"},
                {name: "Poni", property: "Scissors", type: "Balance", terr1: "Lava", terr2: "null", imgurl: "../assets/Poni", key: 13, party: false, ally1: "Ian", ally2: "Dolores", ally3: "Moa"},
                {name: "Raboff", property: "Paper", type: "Defense", terr1: "Grass", terr2: "null", imgurl: "../assets/Raboff", key: 22, party: false, ally1: "Chris", ally2: "Alex", ally3: "Mu"},
                {name: "Rachel", property: "Paper", type: "AreaAttack", terr1: "Poison", terr2: "null", imgurl: "../assets/Rachel", key: 53, party: false, ally1: "Ragna", ally2: "JinKisaragi", ally3: "Noel"},
                {name: "Rage", property: "Rock", type: "Attack", terr1: "Poison", terr2: "null", imgurl: "../assets/Rage", key: 14, party: false, ally1: "Chris", ally2: "Serendi", ally3: "Dominique"},
                {name: "Ragna", property: "Scissors", type: "Attack", terr1: "Lava", terr2: "null", imgurl: "../assets/Ragna", key: 51, party: false, ally1: "JinKisaragi", ally2: "Noel", ally3: "Rachel"},
                {name: "Raizel", property: "Paper", type: "Attack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Raizel", key: 84, party: false, ally1: "Frankenstein", ally2: "Seira", ally3: "Unknown"},
                {name: "Ramlethal", property: "Scissors", type: "AreaAttack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Ramlethal", key: 77, party: false, ally1: "KyKiske", ally2: "SolBadguy", ally3: "May"},
                {name: "Raskreia", property: "Scissors", type: "AreaAttack", terr1: "Grass", terr2: "null", imgurl: "../assets/Raskreia", key: 25, party: false, ally1: "Seira", ally2: "Frankenstein", ally3: "Nox"},
                {name: "Reina", property: "Scissors", type: "Balance", terr1: "Grass", terr2: "null", imgurl: "../assets/Reina", key: 61, party: false, ally1: "Jin", ally2: "Lily", ally3: "Belle"},
                {name: "Ryeogang", property: "Paper", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Ryeogang", key: 83, party: false, ally1: "Carrot", ally2: "Chenny", ally3: "Shu-Shu"},
                {name: "Seira", property: "Scissors", type: "Attack", terr1: "Glacier", terr2: "null", imgurl: "../assets/Seira", key: 81, party: false, ally1: "Raskreia", ally2: "Frankenstein", ally3: "Lily"},
                {name: "Serendi", property: "Rock", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Serendi", key: 15, party: false, ally1: "Ian", ally2: "Moa", ally3: "Momo"},
                {name: "Serphina", property: "Scissors", type: "AreaAttack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Serphina", key: 65, party: false, ally1: "Mas", ally2: "Fruel", ally3: "Persona"},
                {name: "Shark", property: "Scissors", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Shark", key: 36, party: false, ally1: "Deborah", ally2: "Cleo", ally3: "Hella"},
                {name: "Shu-Shu", property: "Rock", type: "Support", terr1: "Water", terr2: "Poison",  imgurl: "../assets/Shu-Shu", key: 39, party: false, ally1: "Gillan", ally2: "Alfred", ally3: "Zero"},
                {name: "Sione", property: "Scissors", type: "Attack", terr1: "Swamp", terr2: "null", imgurl: "../assets/Sione", key: 70, party: false, ally1: "Gillan", ally2: "Azrael", ally3: "Klein"},
                {name: "SolBadguy", property: "Rock", type: "Balance", terr1: "Lava", terr2: "null", imgurl: "../assets/SolBadguy", key: 73, party: false, ally1: "KyKiske", ally2: "May", ally3: "Ramlethal"},
                {name: "Sogoon", property: "Scissors", type: "Attack", terr1: "Glacier", terr2: "null", imgurl: "../assets/Sogoon", key: 85, party: false, ally1: "Hongyeom", ally2: "Rage", ally3: "Unknown"},
                {name: "SonicBoom", property: "Scissors", type: "Balance", terr1: "Lava", terr2: "null", imgurl: "../assets/SonicBoom", key: 10, party: false, ally1: "Mas", ally2: "Lena", ally3: "Nox"},
                {name: "Spooky", property: "Rock", type: "Support", terr1: "Lava", terr2: "Thornbush", imgurl: "../assets/Spooky", key: 38, party: false, ally1: "Banshee", ally2: "", ally3: ""},
                {name: "Sraka", property: "Scissors", type: "Attack", terr1: "Water", terr2: "null", imgurl: "../assets/Sraka", key: 11, party: false, ally1: "Alfred", ally2: "Bearman", ally3: "Lilid"},
                {name: "Taehwa", property: "Scissors", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Taehwa", key: 75, party: false, ally1: "Sraka", ally2: "Dolores", ally3: "Krut"},
                {name: "Tao", property: "Scissors", type: "Attack", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Tao", key: 35, party: false, ally1: "Alfred", ally2: "Lily", ally3: "Unknown"},
                {name: "Thanatos", property: "Rock", type: "Balance", terr1: "Poison", terr2: "null", imgurl: "../assets/Thanatos", key: 66, party: false, ally1: "Celestial", ally2: "Yekaterina", ally3: "Kai"},
                {name: "Unknown", property: "Rock", type: "Attack", terr1: "Water", terr2: "null", imgurl: "../assets/Unknown", key: 41, party: false, ally1: "Nirvana", ally2: "Shu-Shu", ally3: "Belle"},
                {name: "Valkyrie", property: "Paper", type: "Defense", terr1: "Thornbush", terr2: "null", imgurl: "../assets/Valkyrie", key: 27, party: false, ally1: "Chris", ally2: "Kai", ally3: "Alfred"},
                {name: "Woryeong", property: "Paper", type: "AreaAttack", terr1: "Water", terr2: "null", imgurl: "../assets/Woryeong", key: 86, party: false, ally1: "Hongyeom", ally2: "Sogoon", ally3: "Mas"},
                {name: "Yeka", property: "Rock", type: "Balance", terr1: "Water", terr2: "null", imgurl: "../assets/Yeka", key: 74, party: false, ally1: "Celestial", ally2: "Yekaterina", ally3: "Carrot"},
                {name: "Yekaterina", property: "Rock", type: "AreaAttack", terr1: "Water", terr2: "null", imgurl: "../assets/Yekaterina", key: 92, party: false, ally1: "Chenny", ally2: "Deborah", ally3: "Klein"},
                {name: "Zero", property: "Rock", type: "Balance", terr1: "Poison", terr2: "null", imgurl: "../assets/Zero", key: 46, party: false, ally1: "Cleo", ally2: "Momo", ally3: "Sione"}
            ]}
            renderItem={({item}) =>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>{item.key}</Text>
                <Text
                    style={{
                        fontStyle: 'italic'
                    }}>{item.name}</Text>
                <Text>{item.property}</Text>
                <Text>{item.type}</Text>
                <Text>{item.terr1}</Text>
                <Text>{item.terr2}</Text>
                <Text>{item.ally1}</Text>
                <Text>{item.ally2}</Text>
                <Text>{item.ally3}</Text>
            </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerImage: {
        width: 369,
        height: 136,
        borderWidth: 10,
        borderColor: 'blue'
    },
    container: {
        flex: 1,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
