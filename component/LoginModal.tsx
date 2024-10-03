import { View, Text, Modal, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react'
import styles from './style';

interface LoginModalProps {
    visible: boolean;
    toggleLoginModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible ,toggleLoginModal}) => {
 return (
    <Modal visible={visible} animationType="slide" transparent={true}>
     <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
      <TouchableOpacity style={styles.closebutton} onPress={toggleLoginModal}>
       <Image
       source={{uri: 'https://tse2.mm.bing.net/th?id=OIP.UswGk1fpVPS1g-GX0ST2fAHaHa&pid=Api&P=0&h=180'}}
       style={styles.crossImage}
       />
      </TouchableOpacity>
      <Text style={styles.modalTitle}>Login</Text>

      <TextInput
         style={styles.input}
         placeholder="Email address*"
         keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password*"
        secureTextEntry={true}
      />
       <Text style={styles.forget}>Forget Password?</Text>
       
       <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}> Continue </Text>
       </TouchableOpacity>
         
         <View style={styles.socialloginContainer}>
         <TouchableOpacity style={[styles.buttonlog, styles.googleButtonlog]}>
         <Image
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABdFBMVEX////pQTRChvU0qFP5uwT///39//9BhvPe6v0vevT//f85gPX6/f////z//v0/hPRsnfX6uAA1qFU0qVHqQTbnQzH/uwDqQDH5uQCXuvoXoUL5zs3oOy3nQzPkKxT1urX0pZ/68u/nMCLua2T6uLroKRTrVUj94ab8138kpk0xqkcNoD1clfS2377h8ePN59H86OT729j3xMHwhYHuZFvweHHrST/zs6ztc2b84N/tk4zxjoT0lZb87O74qKXvfXbrXE7mPCTmFgD2qqH1yMDpUkz87OPsWinpNzv74ZbvfBrynQz767D5sAj8xDbuayb78M3zjBf90mr2xQDpTy/8+eDqYS/9qQv+/O388MwVcPLH1/6rxPb9ylDn8/36wSykwvn52Hb914bdtxeb0qq7siVGrmaHsDaDqvhPqkJxv4afsimExZZsrT7dtw+/1PvKth9mvXYkh785mZk2oWw/i9E8k686nIE8kLzU7N0qgNO/58TcJemnAAAPS0lEQVR4nO1dC3vTRhYdx54xkTNyLMmWcWQFizqLYmLHhIQGSkMKtPRFKbTbdKFAu14X0rQpW7ptun9+7x3l4SS2JVkP29/qQL8SEiwd3fe9MyNCEiRIkCBBggQJEiRIkCBBggQJEiRIkCBBggQJzoAJnPx5vHcTAihlhHNZZkxy2NRqq6vt9oJAe3P1dk0Wf885/Cwn8IU85jv2CbhhoAi/GKm1r11au760YZgnqJtWdenO+qXFdo0gNZlSMn1ShTtn7cW1JcOyto0UQAMc/b9Y1HXd2Dat7Y31G21p+tQWbpdt3ngXyBm6nkrpKaBW1KvV6hFL5IlU4Zv4Q+/e2JwWhjIVfoQs3FwyLSPlFYZRX7rZBpJUYnyyuQrba9/STUPzTA8FWtQ0w9x4b5NQ4ZkmmCRlt99fEvSKRT8UU7peTenb5p1FCb0vHzeP/kDPubm1baW0ql4UJuYD1WqqCpaZMq2bq0yawMhBQXqM3LtT9257g2BYW6tOnCGTpK0Mot/CHdOX8Q1C1TCB46QFSOB339SqYRBEt2NYazUySQ6Hkc3LpoGGFBZF0NVLk8GPQQLKmXQrBPs7C6t6DRMjRsfLEC/PFnUrdH4Arb5VI1Qesyghf6mt10PSzjMoVo3tRYiO42VIyCKknj5jn1dA6mqtjzOJwwgobYUTIQbCSLXHl8VxibU1oxqN/A6hp3TrfcbH5m1uOMVRhIBkNWVtjSlNZXTN1CEG+suw/QJsUTfu1+KnB0la7boVrfyOUCwaxTaJ26dK5La2rVejld8h0JVZC3F7G9be1rUNPVo/eoRqqqh/sBovQ3YPTBBq1nBSbRfokKjWF0mMWipzslCPNkicAiT09UVGY2RI2YIZi/AOoenmIou1GmYLVsRR8AzMdyDDjzHqgwSFh4mNJKgopE80Jhlywja3tfjYQS1sxltfyKSGPjSWOIjQiuaiyC9iAyN3UjEqaEo332FQ5ceYmLJ1w2+vNxAgDvL4Gv04TLpkjnCbmlbVqroIMDoi5STUwl9pgzP3qqbHHAehEF2oj1DPF/WirhuGZZqGtoTY0K061F1IuDgksDo2GOfYjbLbuqbpG34ZaoZlLa29f221xkW3nvFabfXe3Vv3LcsQBeAA6HHHQWB4GYzQpx/VLXPj5rVaryiQJn5Fa/duaZY1UIqODcbmRzlc6q7pWUOLOAmt6tv1pUtDiwLWvqmZJ1Z5DMcG44yDeK1NU/NcLYH/0FOWtbXgYkZg2/K162CgZ2ZVaIMs1jjI4WJ3DO/5to59+Zu3CXPp6MpiANO+bBrFU08PbTDmOCixu4Mtpg+M+nvC+Ohwbw/f5ZRS1r5+um0uwkS8A29223NXBoVRX1/11eVkZLFoiAUNWNKnYrZBcQdsy/PsRdeM6oLP5SOgI7Wto/GcHrcNijtY8D6c0M01MD7JVxzjqNH3nNUb8dsgwYRtyXNPxti+xrh/ETCZsdtLSDHeXFRcG1Ro0bObse5/yMhoKw3Actetasy5KEKC52t5FaG1DvdJR9MwNN33Poi5J4MAG3nfSnmL9uYaqNeoiwzE6rY2izcXFRfmvPDRA08yrF+C5E7m0sheArjFmYsegpGPM5lPHkCyOby4r2rm3clYXeAbLFMqP/n0geaiqJp5c9x3OiLYZ4VyJpP5/KsHw1XUWhv3uolRwR6WgWEhk/niwTAhGpdJzFE6FEAYZo8KwA5QfvLlg0GKqlWNJWkqjRDSfvbYIYj4pjiIo2ZtMj72hSEjQJYZL2dOUPiovz8tQiYiT91ibQTI8G/gZw6liFw/6WuMxtZkr+wdDCjRH/bKMFN48qmuna7HtZSmG7Vp1FAEJV+fIohy/Pyr07YIjM1rsfY1w4TMPi6cEmEZVfWLUwyLmnE9zhl0uJDOKKljixA2TqlpfZVM+iaCgZC+LmT64ZsqaqrTAaxu35pSdgjI2PoyzJT//gA3SQgZWjGvBAkXjwcxfAJhw5GhcWvcNxkE9ElpAMNS5lOn+ZcyV6dtZ90RcAvT14Vyf4bCsX6kbWhGap2Ne6XyqADBQEIzmCC4Vag2ivWFKWYosyvDGML3vkzpG4xMq5bixPBFYRhFwDfbl7Cz4v0zZZmGiGCPlhO248IP8PmHfj6Tyc8vhIpA+4dlmXzrzvCFLxvk8tXZMPGP53KQvgId7mgQpcwPvhhSOp+dyYaFmZncUx6AIXiQK0NihUCh8K0/P0rn8zMhIvdMDpTzs+9cGWZ2fD7DcBnmXwXL+FnGjWHmod8pTMgM54M0MOHWXQlmrvj91JAZZgPFCzagdOrV0s/8dmdCZpgfcZJ3yNA9WBQe+e1zh8xw9nkAhtwDw/KO37QiXIYzuQsBGNKB5W8PfIejkBnOPh2dIFB0DfiQ0fjdOx8uw2zuaSA7/NiNYeE7303EsO1wPxDDHzww9DtvCltLnwVgyMjQ6hBQLjxmdKy+NJt7OTpBTwy/972yJGyGFyNlmEGGPhE6w0i19P+E4ViztmAMZQ8MHzvHKkwpQ+YeD8vfsfHmpUG11EtO4/dTQ2cYoED0kJeWM3y8djgTKB7KXjLvnfHaYT4XLKd55KU+9PmpYWvp/ugEQYjuDWGo8cfKcCYQQ8q4q5KWv/fbcw69Ag7AkDMvvTa/uwbCtsMLATrClLn3S8vlnfFm3rPPA62HZD+4ytBvzzt0TxNkHQ+T3OcWmcKV8XYTs36jVS9k6mH2VH7h80NDnlvMB1rTygiGi6GKWi5kmsxHXsNBhl4nS/l8PusmwvzFYMM1MjxclOD3P5c7hHjvtwHDnFfk8zlXeedeBnE0+G+/H0qwXPqXne4SH/UFJXNszjP4fs6N4VM52KBbLC4drKKlHxVVabT89Exl7xkCl+RXbkKEYBFsHQjOZvo7m3KmUHryWkmn0/YuGX0HyTDIjF91YZjPB15cLg0gCAxLv6pqGlFpRrPahMnPZ11EmJ/ncsAdEGzQurZM6SclrQiG9l406585eebGMHeRBN3jIQ8oEUuZnx16AMVuRrMmir5ydTT7NOgeKXmn3IdiufSLah8zVEGInIe/m4TPuYkQslIp6H5hxh6e41fIYJA4JphWVRRi+GKUX+aGRnzMCLgUcFkUkft2oyBIpNX0CcCdRkCQZ10ifj7/ihO/c5OzYPLOORN88RrkpvQIUVEqLd99U1fIT12UNIsFPg00xxfXYQ8LJ6kp/LH064kF9oCHe446kygEw+F5KWR1QYb4h5DFEtNCD8Gf7DMqeqSn4YKS/dmZ4UqanbkawlOVIfvuNcTyz4qCanmWoVpZCX6xHjAmQXGRHU5x9mUImQaeBPD4aI1pqfTLMtgf5KLnZKiAPw1+tRMwcKQQDIczDNSF6r3YI1TTMhL8qZ8FHkYMtRuWO+UM6oULs66VU/5qSBck6GuAYqH843nZHcvQMcVwSILxs6xb8Yu1YZCVl70AX4Mu5pfXynn761FTTG1CycA5+GXXsgnNMCQlxR16T0BFf4U0ZqAIMT6qSqUTyvWghHyWm3HvYMzL4TxRIoQIJjiY3rEcG53AL22A/JZyt1gvCOaeyUEztuOLSjzzGhyoG0H4CaAYrFbEnaj0wvB8VPDL5nNz4WUZnHQq7hJEikplL+ClJELBjbpaIRC8GN42DzywKd0njzmnpBAzwKMGeq6M0f2cexcRm90XaKh7Hlc8CRHEmLa7TfBNlI2gQXjiB3/pwQZngi5/7gfFg6c5lKT9XyJLI2yFAgWlc/PuNigIzgZZV9oXrYpXgmq6sYddcN8yhErvKZSEXhhmc/NB68KzYGTXkwxV/K3YSmuUDlHzzb9n3XLRyETISLOCQd2bIKHUcBwOWKO7N3Deg0h4x7aXf4N8O+siRpBzfp6ElbH1oFPpUzUNhF0RquqpTSTD3bIVpQE1y/JbbF24VE1ZFGHY7/Wi8KvrWYRCjHZ6z2NBBTa7olQgmorK7He3jC2bz7+iNGgn+NxNyKinqkd/ijUy+F7b3j3w0oRr7lVsfCbIMa0u/yfn1mPLPY/o3XMdj/60V1e7nUNB4glnR0dcMTwQTJaxDiTNTte2Tz255T9ASkMUFTLSSOihpr6x/VKEmqqi7LWOnrgsi2HYkQnxVkdp4GeeVv/lt3/lhjG8GtW+YyZz3wwVkQJUGt3dTqvZPHSs4GB5c2VlV6mgdqpndR9KTfXPIW0oqAsjOq1JYqTV8EsRCQgGQLNiK10BxW4IcunDZPc0R2wDQdjIDyjzcy9JlOc1dRruGfhwvt7+vbL89iqGjXN+dCaLLcQoT9zarfgJGSMDNBXCRv7c7An9aITsALLU9W2Lo1HEsHG+zMjjPC1ShhLhXouMgAwxwfnjXCmce4UaGnB1wnBA4LeDmaJ3gKb+heXwYXDMQgi5GvmxmDJQhEIqForolJb/nM0elfw5oDhHAu2/9wIqKMbjbTBLXf7tuGuTzecukOjfwS4u4LUcDgZVNH7Ut86gNC+OFyA8jnNUmKOoscgRiaq/O2Kc3Q+rP+oGfIwxKapDEaoNsMXZfcJjYsiwlDqw44mLDsU/srnZfVDRuN6IJA5DbipxUcTeT/evfVmK900ChMy9qYCzU9ORqyuExXTlv+M4/ZXtNdR0DKFRUW27NZaDNRlZaaSHjdzCYohtdB55pD/HDutYcqDGkMJhZ9L3BrLQwHexPRVhbHTmrmM8Yxo01bY9zBZHYwf/2WqLxH5Gey/Agzd3GxHZooK9cwkzjDGeBycWsa+kIwmN4EOXhQ8dZVIXKijZ2WscLlYIi52KkRZnWJMBimOjiiomayEBHlWlezBuYkegouff6vpo+rtCrSgrxOe7aqKDOKkcfAFyDIlgpbuCJ2/GVUt4R+tNwxmxjMZUDO9wzQrKb1IPDD3YrdiqjzFjL1Qcrql2pduK962H3uEcVcM7SqXvKmJ3ETpjHJxVTYj9nQUHz0Bx6nuwl66MECHVir3bouK8xnFTcQFwlFp7IElVFB6Kk345tqn0rG9Ec1UwiCpiCKeeDOEmH6Ll1+zs2g3bPnY7pzRXdSpL4Vrsim3vdppzZKreceK86oI3V/a6tl0BwzxjmeJLFSduSndv5YDhcoUpez2GLNyhcD0Hrc7em24aiB6hgbJNd9/srbSajtioWAwxrWfzO+DNZvPgoIU4OIA/x/1erqjBROpz8qU0uSE9CGSnI4+HVFM6vWeA9weVRR95St+2kyBBggQJEiRIkCBBggQJEiRIkCBBggQJpgD/A9TJ1+iPS9jSAAAAAElFTkSuQmCC' }}
          style={styles.icon}
        />
        <Text style={styles.buttonTextlog}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonlog, styles.facebookButtonlog]}>
      <Image
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUIZf////////v///0AYv8AW/7B1v4/gP8AXf///v+guf8AZv7q8P4AWP4AYP/c6f3U4v4AVv7I2vwZb/3x9vzh7PwAXvqkwP+Ws/5nl/0jdP8zfP1RjPx8ov60yvzA1P9OhPcIafpgk/70+vmnwvh8pPpunfzp8vqWu/5BgvwAVP/U5f0nd/3h6f11nfu3zfuGrPw8gvfp9fmOrP7J3fmQtPqEq/XlAFytAAANY0lEQVR4nN2dCXfavBKGZS1EqbBwwJiwJUBYvyQNbUP//0+7NmRhMVjSjGxu3/b0tD0B/DDaZxEJfIoyRm/jdvOhcz/sDlb9l16r1eq99FeD7vC+89Bsx7fZj3h9BuLpfVn6K359vP85aolQ6iThnBNCVKb0L+m/kkTKULZGPzePr/H25/3IC2FqlsbbbNTSKZvOwM6Lay1F0hrN3hrMDyMyYcrGaHvaHWuZoqmLcN9ShCdCjyedRtpm03dAfSRkQhrXZj2RFBjunHTYmtXiayXMvvvFQ1eF2gnuG1JNHuqZKbEeDJHwcTKWbrY7FBdq8vZ0ZYSUNmZEwKy3Ly30zwiptWIQsni6ChPTYcVMKgn7nRiDEU5I2+sWSus8kRjPGvDVAJCQsteulhzXfh9Simg9iKB2hBHSaHCH1/vypMNRE8YIIGQsmgDnBhPxcNCEDDoAwnY38c+XSSfdRumEjD7NHBcuTozhMHZdAzgRph82VVp5GV/OMeqO4/bDhZDSaCVKpNtJ9t26oz0hC2jaQMu0306Ky3lcDmFTlTPAnCpRj/ZWtCRkNB6K8kaYE4l53XbbYUlI33u6/Ab6LaVbNcuFnBUhpZsqDbgVl2tqxWhFuKhgCD2RkjdtT4SsNk6qxtuKqzeLrmhKyBhdVjWEHksRsTZHNCRMB7CuqHKIOZIYPJl2RjNCxuK+ND4cLENJr244a5gR0ufetTTRT/FxZGZFE0LKmuTaADPHgNnMaELI3u6qxsmTupuatNNiQkanVzAL5kosDSb/IsJ0U7aU1zTEHCi5L7ZioQ3p8lotmEn8LTRiASFjy/BqLZhKhesiB2sBIe1c0zyfIyXuIYTpICOrRiiUXF6e+i/b8O3KLbiVmF604gVCRpth1U9vpPDxEuJ5Qsaeq350Qyn9fqGdniVMF9ut61uq5YuP6+eteIGwXxKgymJPuNZcb//kDuckvPdkT0i7/ofRLNQkDJNx72Y1Gky6qSaD0c1Li4hQSGnjNUgmZ9vpOULmeynDpRStwazz+FyP49tsebj9zYLbOK6/Rm/L9fxG3QmptdG+9Pyu/xxhzadbgkvBB8va7yzkIncy2/4nZfQpeliPlDZpTfLNipAuxr7oFNHJ6r555nFyH6axMUBU5IxH/AzhyhcgD/sbu/iu1MrPRvNyP99xk0tIN546YXI3eXdwIEVGhHKWa8Q8QvruAzCbFIb1wMUJaEZIZK7fJo8w7vk4uud63nb04xoS8lbdiJCxoY+pXvYjFvglJLpLbw0Ig5qHDQUXG0AosCmhCh9Ov8ITQsoUehtVSe/ZGc+CMFV88j2eEs6w26gicgALNTQn1PNCQhahd0IlhsDILQsbytrxZx0RsmCF3EYVCdfQcFgLQv5y3FyOCOkUe5gpPipCJSTJ5jLhE/YwquQQymdHSJLFRUL0YYYMECK27QjnFwhpG/sAP+0WYD5LQhI+H3ynB4Rsjh3rpJ/hFrQl1JPzhOgzhVgi8NkSEnmw+9wnpBNcQsVvcMLtLQn5aL/v7xFSs42mhRKUNmpNSO5q+YTBALmRaoSJwomQ/9p78R7hK7YvWy1OnrUcQhJGeYS0i2zCxCKsB5lQD77PSr4J29gDaYKS8uJEmM5SXy/+ImRr5DPu5CcSnwsh/x4CvgjjFi6gukPI6HEmJOPFZwP6JKRT5AUbH+ElMNsTKrk8IcTeFyYdvFRQBxvyl2NC9NkebapwIyTic+m2I2RshhwcqweI2bwuhLz7MWF8EuLyZeED7oR7yTFs+3cXQiWfDgjfsM/xdcOZkGYnxzvt3G+GnpkjiWmwR4i9qyC8Z+2A2XG1mw+bYeYKHo0Gg0G3O5+tfzx0XKZqPdq3Ibq70GHRzWj0Y5UIKaU+kJTCcYxo7xE+YPvsxTmPbL5uKVsse3eZ5z7P9ew2U6fzFfsgZOiLbnJnlRKRrqjWY3yP3m75vSWM0V0x2srLS6OWj8APvvgkpDXs6V4PrCw4FV7yAMRD8GlD9FNS+cdiUUo7nlJxdPfLhj3s9/6ci4zU9BYAqT5t2Ebv5KF5Dj2LvQW27A4zSLZxwm4lStTNCfEdCV/abqFSQoY+VxBlnrDb8JgPp7OD08yGY3S39stpwMBZE3rN+KOZDVkD3YR8ZAwYe83q19HWhuj7inSYNiZEn4oPJDsZoYd2wo3X3T7HGZIFLmxHmhF6N9RrU8LAS/jVl/hNRoh9jJhKb0wBnzxn5IzrjASv+An2smNKGPmNRFbimRH6iN/XpemijaFvTI8kppSwe/wPMSak954z//SflPAn/mgmcwLo8m3oJQxyT3qSttIR/ocYn2Ggn4Adi/dvyW0Lf7wWNUMT+vh6D6ViEnvo66aEAbvxXUjkv9+k7WHZZExIvROKiDSrtKF/QvlGfMxIV0SoO8THMdA1EW7I/b9NyGdk6OEzrolwQrr/OOGIDP5tQnJDfGSpXRPhC+l7eNdrImyljPi6JsIx6XnYoF0RYUrXAhFqmaf/Hk0JX8LcNzgUEBJEqP/8yNWrISHr5L/+QPdAO4MIZZvlyZBvy1isCGhEkO9QNthtjiwI815+KAaqIKMIbCyV7nFBxmKwdeUYNh+WQRjA1iQt2JqmDMIYdpD0AluXlkDIgC7UG9jeogRCCnP+pXsLUD8ugxAWYa8n5B5yYlkGIezQmA9h5zQlEMYvoIFGb2BnbSUQ1mGn4kkHdl5aAmET5mHUb+QVcuZdAmEHZkMRwfwWJRACzwL/+w3zPZVA2IcRqpjQX4Bm4J2QMZiTOPMfgnzA/gmfYaGZmQ+YmRTSqo7wATiUrrNYDMB7eCekf2AbfDnN4mkAixr/Iw3QDS4jCouJ8m9DYGToNiYKEtfmnbAN4vuIa4OEB3onbMIaKZ9D40u9E/4ADjS7+FJAjLBnQhZ0YUcYMtpFsrunA/gmhMbbqKcd4eRqCeuwXAz9i277IWCD4rsfNmArGnm/y7cIGs5bRN82BK7ZxHvwkffkPOf7JlwDA/uCAJq75ruVwsIodgWjtoTOSQ+eCW9hkfxyCs8hlYD7QQ20gNUE0t85pHTi+F3J93quDBO7GM1/+aeAUYWj70xn9zFL5UoaRyqszrzDpyCAeld7ZJetXscNyLCIxfAYBc13XchLTYWriDbhvzzWxbgKws/aIx+ET/+cDZX4fVi95SdmIO01EPIJ2ycMgmfMZnoNhEc1hrLPQixrcA2EvZNKWJhXV1VPqPTmmDDATPy/AkJSPyHEzMitnlB/FxP+rpuImLRePaF8zyFEXNdUTqhX37VV9uqXutQMy1flhGHzOwR0j5Chpa1XTcj7ezGu+1V20S6Sq5rw4Kq5fUKGVUi4YkK+2j9bOajn3URanFZMKGr7l7Ec1mRHGk6rJdSHlVUObw5wPxs+ULWE4eFtiEd3I+Dkx1dKuKvwdZYw/n8nVEQeXfp0fAtLB6OMQ5U21MdVxE9u0gFGWW1VJWHruIr4yW1IQM/5VhUSnl6DeGJDOodPipURKn56W+eJDRnCZTrV2TBZFN/ZFQSP4POMqghVXn3mHEI2h3bFqgiTQU7Jzbz7DxfQgi4VEfKx2f2HW48prJ1WRCge8qqm5hLSv8AIgUoIc+7NO0sYsBXofLgKQsV7+dmrZ27LbYOaaSU2TJ5t7gNOpwzI+rQKwl1ZZAtCCinjVgGhmNneyx3QgfvqrXxCObK+Wz2Ve9JY6YR8fD764zwhrTvHWJdNyFWDni0gfsGGLHK9K7BkQqWbF+7CvkRIa44xSSUThg+XLtO4QOh+72qphCrcXCxxf5EwYEunOaNUQvk35zJuY0LHAqNlEsp1wSUFRYRs7bDPKJFQDItKqRQQuuXDl0cohoU39hQSBsy+oZZFqITBhdjFhJQubXeLZRGKvwZ3LhUTplac3tlZsRzComnCgjCgNW71JKUQcp17aOFGGNB3qzVqGYRc1czusjEjZKzeszhiLIFQjhsX1qL2hOmz3A7Mvaf+CcUoNi0pZkq4u4rVcMDxTKi2O3rTTA9zwoC9EcPn8UzIE9Oa75aEQdDum82Mfgl177n4nR0JabqEM3kkn4RczAKrW2qtCNNN8WPLYEz1R6iS8cXtLpgwmzbmYeGA44swHWIGdXrrlTDTGykyoy9Cnkztr1G2J7xl8bygN3oilJOFnfm2crBhOuDUXi4eF3shlK1HuyHmQy6EmbN/mVxg9EDI5b35XW4HciNMR5zf8/Bsd0Qn1OGkblX4dU+OhJmeJ/oMIzIhT0bvjngBiJCx5ijMfUJUQh6uapBsYwBh9oTNXyLHjoiEWtw8MpcB5kswwnSBHw3kCSMSoVJar5qMWhUmPhGQMHvKaDg+YkQi1GoeWV/vfSI4YbpTWyxfwn0/FQKh4mFvU99eHw8UnDDIHoO+d8V3jwQTciEmTQqny4RCmIk+TUcqwSDkiR5Nj6NE3YVGmH7hrN0Z8MySAEIu9aDTtqvrfllohFsxunjoqvDOjVDLkHSnC/jgciBcwq0lWbSJDH/8i5DrdM5ZZa+zrMtfLGTCnYynaHqjudZSjG/mnegJ2Xgf8kJoLPbC+5PZNNpFTfqpBFMx4e84NTjStHBG/wNpVO/IF3XI2QAAAABJRU5ErkJggg==' }}
          style={styles.icon}
        />
        <Text style={styles.buttonTextlog}>Facebook</Text>
      </TouchableOpacity>
         </View>
         
         <TouchableOpacity>
            <Text style={styles.footerText2}>Don't have an account? Sign up</Text>
         </TouchableOpacity>

      </View>
     </View>
    </Modal>
 );
};

export default LoginModal;