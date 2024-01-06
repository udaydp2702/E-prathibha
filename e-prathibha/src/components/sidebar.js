// Sidebar.js
import React, { useState } from "react";

const Sidebar = ({ onLogoClick }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",

    password: "",
  });

  const handleLogoClick = () => {
    onLogoClick();
    setIsFormVisible(false); // it close when i click
  };

  const handleFormToggle = () => {
    setIsFormVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can make an API request here)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="sidebar">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADwAS4DASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/xABFEAABAwIBCAYHBgUDBAMBAAABAAIDBBEhBRITMUFRYZEGIlJxgaEUQlOSscHRIzIzQ2JyJFWC4fCTorIVY3PCJUVU0v/EABoBAQEBAQEBAQAAAAAAAAAAAAMCAQQABQb/xAAyEQACAQMDAgMHAwQDAAAAAAAAAQIDEVESITETQWGh0QQiUmJxkbEUMsEjgeHwJDNC/9oADAMBAAIRAxEAPwD5GpdEFYXQoM0G6u6IKxrKVQeTwN+9Xc8eSYiCRQeTbCw7eDyUDyN4xJTUSVU3k0SH9/JXn9/JPRBWqbybYQJO/kppOJ8lpwVR2DGYbLqunK9rnhGk/dyR553P90rQLKxbikVN5NsZjIC1wzTcggYKCSwF7iwGzctYsrw3Lem8m2MelO53JXpf3clsHcFYVdN5NsYtL+7kppRvPJapQDG4Wvew8wjw1W8lnTle1z1jFpP3clNIR6ruRW3BVzXum8m2MTpLhtmnBwOrcoZe/ktmCE23KXTfNzLGTSH9XJUZO/ktd+Co2Uum8nrGTScTyVGTvWh9i6PDa4+SmGOAR9OT7mWM2fwPJVn7weS0myHDiscGu5ljMXXN7HVZUXa9a0lAUTpvJlhGd38lV047EKjQ8mCrqXR2xPgqRaXkwBUiKpG4mFgIghx3FWA7cUkWeCsrGs94VdfcoM+56pSp8bGjAEQCV9p2XIhpey5KpeBowBEAlDSdhyIF5xDHEasMUimaNARgJI0vs3eaMCfWI3cwlUr9jRgGpRg6jfH4lCDP7JxKjRO0AaN+G5WnvwbYaGlEGpQNQdUT/MIv4j2UnNIn4FWGhqLN1JJMzQXGOQAaydQUBlIBETzfVrxVXR4fmqZqUBUexkRAVQH4T+YK2/gUkXIOo/uv5hFZA70lzS3Qux2keKo+kjXFJ5r3fg2wyylkv+J9k/mVD6R7KTmsuesHmqs1Lc6Vts6N4vgL7TuVfbeyfyKltHrBlutCW6kNp8Psn371D6QNcbuYKhvwMsU4daPvPwVWVO07i06J3VJPHEWQkzatG/zRuVmZYsjgqI4IftvZuVHS9h6hy8CWiyEBCol980tdfXbah+07DkTmSFZAQrtJsafEoTpOyVOrwMKOs9wVHUoc+5JacVXW3FDckpUrIduKo525G2YEiCoIguhHix3I0IRJkUWEYQi28c0YSo0IKMvm/wBTj5qAK48Qf3O+KRcmhjuRjuQgIwAmRQQ24Igf8KoAI8N4SIpF4lEOPkqFt45owAdSRIpIGT8OWwxzHa+5G29m9w+Cjm9ST9rvgmsbdrP2t+CtRbZcY3KA4IgBuTAy6YIl0RotjRpme3BS3BahGpox/hVuhITpMyEHgqIG7FaSwbxzQFiGVJol02jHJe8OGGlB5ByLwRyttov/ACs+ahauZxswnEUe5CSMcE0hAQFDJ0iieCA3TSAgIG8c1DJaFG6E2TDm7xzQFqJkiSftL29T5qiid9/+j5qEBFkhoWUBTCEB2o2SwCgJTCgNkTJBQolRRMwrNciDX8ESsKlBGAhsm4c1YbKbgAYJgVtvd/f8kqprJoAZMdg8kYjm/SPE/JMF8EYJ4Jo0lk1IWGVI1ZvNWIqgbGnEnXvTwiF06pLJSQkR1R9Vo7yEYiqtzOaeLo23SxpItIziKqx6rPeVsZUvaHNY2x1XNviVsBOwYqobiOIfp874pFTKSENhrOyzxITWwVf/AGu65WkXTWXTRpouMTKIa4gt6lnAg9bYcNqY2mrLDqsNuI+a2Nudi0sEhMbI2F8srxHDG3W952D4kr6FKimdcIZMAgqmhpLWXcc1rR1nvO5rW3JK9DQdFctVUbZqkwUMBF86oxfbfm3suq2LJ/RiKOSdjKzL1QzOYx1tHTt8b2aPPidXDrK6vyhIZK6d8xJwjuWwM4NjHzukVWU1ejZRy+/0X8syMp1P+vZZOkch9FIOrUdIs54+9onRgA/0hW3o7kCq6tD0gYZDg1k2jNzyBXAlcBE8Na1o6t80AWGcNyYS1185rTjtaCve/wBqj+y/FhFSl8Zoyj0dy3k8aR8TJqf21OC5oG9zRjyuuS6mqSA5hiIIuC1xsR3r0GT8sZSyeQIpDNT6n005zmkfoc7EFbq2gosoUz8r5GbqJNdRgWIdtcG7HfHzUObW1W2/DX8rt+C9Uo7VF/c8TJT1psDmdVwdr2pLoKwerGeIIXaeAQHCxBFxbcsrgcVz1aVj1SnY5egrNoj5oDDV9mPmui4FAe5cEqaOVxsc1zKlrmNzG3de1jcYITFVdlnMLbJfSQnYDJzzVRJROmmRYxGGo2iMeKAx1I1ZnM/NbSTuSyeCN01khoxOiqCc45t7WtfYgLJ+y3mFsJKWboXTWQrGYxzbm80BZLubzWk33oCUbpxIaMxEtyLC4VZsm4J3rP7mqig6aZNhGa/9PNUWv4JpQlS4ImxLjeiBbvCAMd2giEbu15K46sHhg1q24Ok/p+CERv7fkiETsevideBTLVg1DGlu8IwW7wlCGXtjzRiGXZIOSaOrBSQ4Fu8Iw5u/4pIglP5o5K44Z3AnPaLEtx4GyVOWCkaGubv+KY0t7QSW00/tW8imtppTrm5NXRHVgtIc0KoC3RsBI2/EoW0s+ycDuBCJtJMAA2YW3FpTJPBaQ9pZ2gnMLO0FmbSVG2cDuBT2UlR7ceLSuiCbGgkao83DEL0nR+OnpYMpdIKlodHRtfBRNNuvILBzgDtJwHcvMinqY45HiVpLGOfYNtfNF9a9PlOOSn6O9GcnxENNT/EykjXmMz7nxsu2rG8I07/udn9OWLUV0oLucSWpknlmqah+dPO7PlOJAOxjb7BqHPalZzDqcOaF1HU+3HHqkoDQz/8A6ceMYt8VNWS4R0NKKsi576GUjGzfmEeeztN5pBoqlzS11SM06wGmx5FX6FVC1qhvi0rm1EJmlr2doc10slZR/wCm1kU4deCUthq2Xu10buqH23i+PDuXGbRVOH8QL7QGkhaGUdS4Zunb1rtPVO3BPHTNOM+GdMIqcdLOtl6hjoa5+jAFNVt9KgtqBd99vwPiuFIWY4/Feoyln1vRrINST/EQzNpnOOvG8ZuvLy0lTj9s23cUUbype9yrr7HoLVS35WxncWb0o2N7EJjqSfbOLftukupJtk9zxYuKadzlnFC5bB0H7nXP9KElvaCJ1JMbZ097auqcO5LdS1Htm27igd12BaBcW9oJZLd4Rmmm9sOSWaeb2o90opasBtAuLd4SyW7/AIqGKbPLdIPu517eGpCYJvaDkUDcsBNAkt4ITY31KzDJtk5BAYZBqk8lDcsBsA/ed+1qE23qzE+5OeL9yExv7aF6l2DKNuCE23qyxw9byQ5ju15I25YJDF0Yulhw/wACPOHHkmizAxcoxdAHAb0TXDimTNGBNakhw3FMa5vFPFotDgTgpFfNOPrv/wCRVNIO0K4i0B1+2+1t10qe6KQ9t00EpIezjyTWvZx5LoiIhoJ3povvSQ9n6uSYJG7ilQiQ5oTmEpDZG7nck9kjO7vCeDFjG494c6CoA2wy/wDEr0WWTpKDolO37pppIvExX+S4ALdHJYi2jeTjssV3Ib1fRSMDrTZGqA4gazG02P8AtK6KjtoniX5Vh6itolhnIOchJdv8kbnx7LkHUbawgL2fq5FHUTXI84MG7lOtvKmkj3HkppGbnckFtwtJYatEZILb2tca0lsjT6rvJMLrxuDPxH2ijBGt8hzAPNPTR2UYb3OxJdnRPJQOBqK9r29xe5+C4Mmdiu/0iLaWHo9kxhsKSJkso3EgsGHNcCWRnHkUVPem5ZbfmZSj/ScstszuLt6QS7HFNdIzjySXPZx5Lmmc04i3Z29KdfHEpjns/VySnPbuKJsJoApbiUTpG7jyQFzTqPPBCwmhDr6U/wDjA5OQuuieQJBxjP8AyQOc3jyRNoFoAkpZJRlzcdfJLLgjckCwXXSzdE5w48kJI3IZNBsEoCSrLghwRNkEEQ7RRCJvacoEQVxhHBhYhHaerbFcvBe6zSALcRfFEFbNb+8HmAlUI3WxVi207dr3eSa2nZ2pD42+CjUxpK6IwjgpFClYfXk5gpgpI9j5B4hWCd6YLp4wjgRAto49sr/IJraOPZLJzCJqa1NGKwIkC2iab2lludWItfipDR6SNj3TPBdc9XEWuRtWhpO0lSm/Ci4Nt5lMkhERmT2e2l8LLSyghsPtJr78/wDso1OYTvKSI0eS2ZPi2yzEbrj6LvdH3xUNY6klc51JlOMwP0lrNmAObq3j4LkMJ3laM3Pbm5xa4EOa9v3mPabtcO7/ADWuhvqQcG9mdmnqQ0MCfJDaaqq6SV8rXwSHMsQA6B2LHC/I9yUclxe3n5t+i9HIHZboWVMbWjK+TW6Ooi1aaO1yO4jFpXLY4PYHMvtBDhZzHDAtcN42qFUlONnytn6/3Kpyc42fKOVUZOEUEsjJ5i5gBs+2abuDdlt6aMlN1Gomvt1a+C1VTSYJb42DDbfZ7TZPzMUd5FKLMTMlxi320+HFo+S62Q8mQSZSErnSGmyaw1FQ6RwLdMR1WbsBie8JAbM98NPTt0lVOc2BmsDYZH29Ueeru6WUDFk6jZkKleXTSATZVnB6xzzctJG12PhdZUnLT0095eS7v/e4k3Kypx5f4ORlA/8AVaqpr5HyATvOga21mwNuGaxt1+K5ktCzEaaUDjYroyHDdstuWV+1bJ2WlcIub0rTHhGB1DAPzZb97fokuoI/ay8wtrktxO9cstzjk2znyUga+FrZX5shcDc49UZ2CF1EzH7WS3gtUv4kBO+QDxbrQuQuK7hsyGkjH5kh4XASnUkex8g8brWUpxKNxjgGSMjqSPtyX7wlOpWe0f5LU5KdtROEcASMxp49j38wlmBvaf5LS7alElE4RwCzMYus4Z7rAA81RhHacmeu/uafiqKBQjgJiTE3e7mh0Y3lNKHaocI4IADsdnNGHD/ChEce7zRiOPshVFTMQYc3eo17c5+N/u+QUEUR9XzKMQw7W+ZTKMzUWJG4auYTBI3/AAhAIYN3mU1sFOfV8yniploISN3DmmCUcOaFtNT7Wf7nfVSGnp3NJNz13gG5GANgmjrLSHCYX9X3k5szNtvAhA2lpezfvcU5tNS+zbzN/iuiOoWIbJYsLvaP3FSCZgjaL317QNbiVbaSlv8Ah/7nfVNFHSHWzk5yZJvkaKCFRHw94JrZ2cPeCFtFQ7WE97nfIpzaChP5Z99/1SpDxigm1DRsHvBPZVN3N8XhKfQUTYZnBha5sb3h2e42LRfUTZOjybQlsdw4nNbnHPcLm25Klbc6oK25pgrpYJoqqlexk8eH3+pKy9zHIN247PFdwRZPy2XVNDKykypmj0mnlto5iB6zQeRB8di4bMnUOvRmw1kyPt4m6cykoDmujY3qnqyQyuzmng9jr+amajL3k2nn1yNOnGXvR2kPq6DKzI5opcnVAe5uaHU+bLGSSMQbh3ktFPk3LVWbRUTqdtxnT1xa1rBvEbTc80UdZleFubDlSoDRqErYpbDgXAHzS6iorqlpbVZRq5GkWLGOELD/AKQB80Oqpxt9d/x/kxOtxt9f8GmSrybkJk0FBI2qytMLVNXIWlsWFsSMMNjQuEahjc8lxe97nPke97S+R7tbnW2ppo8nNzW5rQXXzQ6RwLtmALroX5NovZu99/1VxjGC7tvv/vY6IU401fdt8syvqWnUB7wSH1DdzfeCdPk+kboM0FmdM1jrOJu0gk/e7kLqCi7J7s9ymSDlFcmUzjc33ggM0Z14eIWk0NGPywbb3O+qU+jpD+UB3Fw+aBo55RRkmljzoCHA2c4mxxHVtigdMzh7wWh1JSD1ObnfVZ3UtIPVI7nFA0wZWEmZnDmEt0reHMJppqQ+p5u+qWaWm7HmfqiakDIQ6QcOaU6UcOaY+ng0trHN0eda+29kJp6fdfvJRNTOeQoyDhzQF7TtTTBAPUB8SlOhh7IHcSjamBISXtz3Y36rdqEvb/hCYYouz5lLMUW7zKFqaCYBe1DnBEY4t3mVWjjvqRNTDZaIb0nSDh5ohIOHmrjOJ5DwjCQJBvHmi0o3t80yqRyUjS1MasomGGI5JjZ29pvmmjUiWjU1FDqPB7wPeKQ2eLaVI52AOxGL3Ox4lMpxui0bwmNWIVLRtHmnMqGb2+a6YyTGijcwLQwLAyoZ2mea1xzNw6zeOBXZTg5cHZSp6jYxhwT2ssLnADWSbAd5K2ZJyRlHKbDOHx0tC371TM3Fw2mNrsLcStrj0IycftJJ8qVLdhOfGDw9QJHOEZaIpyeF/tjo1wi9MVd+BymMNUJIqaKWpe5rm2p2F7bkbX/c812YMg5Zexr6l1LQRBoJfO4SSAWxNjZo80ibpZU5jo6GKkoYw05gjZpJSdgvg0ea5MmUDUkPqp5Kh+v7d73NB4MHU8l5qtLso+b9PyMo1pdtK8zv6LolSutLLU5XqGn7rLvhB8LRhFU09NV0wytkuLMDRo6+jYLObmYXDR6zfPkvOjKEQs0FgAwAAcByW2gyv6DUtqYy1zHWZVQi9pmar2OGcPNFKjP90W3Lx7+GEV+nkveg7teY0ODmte0gtcAWkaiCoXFoaGtL5JHCOGNv3pZDqaOG87AtmU6WOCNuU8n/AGmTqo6SRkYLzBI/a1oxsdoWmlZHkalOWMosBrpmaOgpsPswcQO863H5BG6sdKlHl7Jd74KVSOnVHdva3iWafJWSIY4spU4rsoVv2tSxjWkxRAWs0O1NGofVAyi6O1ZAoMoy0cpxFPU3zb7gyX5Lgy5QdJLNUTSsfPM7OlcQbXGprb+qNn90s11O8ZsmjcOONu64XlQkt3J6vL7Cr2eS3cnq8jsVeQ8tQ5j9BHUxseH6Sldc2sQeo7/+lzXgNdmPDo39iZpjdycrhyvUUmYaOrmj6wuwuL4w3b1X/Irqs6T087RHlOip6lhFi+JoD7b8131Wt1o8pS+mz+wumslvFS+mz+xxXR8Eh7Na9Kyk6LZRP/x9c+kmdqhkPUvuzH4clyMp0Vbk2TMqWMzHX0crLmN/91CqQm9PDw9jyjCo9K2eHscd4Wd41p0srRfrN81jfOO03kUNS0eTgrUnFlOS3XS3VDb/AHm8kBqYtpHhdczmjgmUcJTxj/8AZA5A+ePSBwOGYRc773QOnbvb5oXOKOeQTkoqjO3HEeaWZhvajdSOQJFlAUJkG8IDIN4ROpEJhFDfHFCZBvCrPbdG5xyQwgGbhyRAM3DkECMJI2MDDY+y3kFbGx50nVFrgauCEbETdbxxB8kitdbFIc1sXZbyTWiMamt5BJamBdMbYKQ0Ni7LPdCYGw7WM90JITGlMmhEOayAao2e6FoYyD2bPFoWduxPZsTw5Hhyao4qfbHHx6oXRyPk6PKNTk+iawWldpahxGIhYbkX44DmufDsXqeiAEZyvWnVS0OjufVJznEfBdzk6dKU489vqfQT0UnJEy5lFtRO6ggIZk2hOhbGzBs0jcCX21garfRcnOiAsGxgbAGtt8EjOJaHON3Ou9x3uec4nzQZxW2VKKhEZf0YqKNQFP2Ivdb9FC2mOuKM/wBAWYORBwRObyZ1G+5oa2lbgIIx/Q36LRGylP5UXuN+ixNcmtesUmJTm0+Ts0GUW5MdIHRaaglxlp25vUkuAHRtJAsdo8dqRWVL8oTvqaxrS4kthiPWZTx7Gt2XPrHw1Bc6WS0MnAA33WcMUbpFmiCl1EtzpWhPqJe8G4UtxaOLDV1G4eSE6A4Fsfuj6JTnpZduUSkBKbb5HWpxgI4vcb9FR9GP5cfuhILlWevdRlxqtdzSDB7NoGywAI7iMV6PJkzcq0tTkesdpHtjMlHI8gvsNneCvKNdiupkebQ5Tya+9rzaMng8FHVXUg33XB1purB5W6+py6qCNkrI3xtD43yskAbYXZhqWGSOnufs2e6vQ9IotDleqFrB79K3uezH4LgS6ysbU4KeSPaffiprvuZXMhBuGsHc0JLmxHW1h72hNftWdxXKz4VTZgObF2Ge6ElzIdeY2/cEwpZKJ2OaTFkR49RvIJZbHrzW8gjcllG7YBkxWbHnyYCwDfNUWx9lvJWfvv7m/NUUNlYJgdXcOSEht8QOQVlCcEbtghiw/vRB53O5IgUQIUxi8klCTgeSsSYuNjjbZuFkYI3ow5MovJVhYmPHkmCY7nckYdwTGuTRjLJaFif93JEKji7kE4OGCkJAbqGLnnzSpSyWgW1Bv6/JaY534HNef6cFbHBaY3A21rqpJ35OmnyMhn1dR3day9fkn+F6J5dqTg6pkfEDw/DXmoXAC+4E8sV6ms/heiuRIDg6qnbM8bxjIV9Gf7YQy15bn0mvdjHLPJPqSMAHkDAWGxJNWf1+6tz5Ds8kAdfWpqu7Lqu7Mnpe3r9+aFYrBa5L+QstUrm6KYEXGjfh4JjCA1gzcA1otsFggswlEyCrdh+LyumirkAuWSkcWFag4cUWeOK9YVIxyVmfG9gjfdwtqNtYOKhriNeeO9oW0OHFQvG5edy98GD01x2Pt+0KjVn9fuLfnnd8VM4HFQ0bbwOcas7S/wB1D6Xba/ktk2a404IzjpmkXGoBrj9FZcNyjSzLWMrKlxI/Ex4LfTVLmS07yHjMmifctItZwKUH23pzHhwIxxBHNLDB3+xySlZo7/TBtqnJ9U0XE1ML23tH914yae1/vcgvd5Z/iMi5CqxiWgRuO67bLx85GOC5qV+la/F0a1/x0n2uvszjvqHbn8lndUH9XuroyPxWZzgueUXk+BW5MRqOLuSWZr7XclpJBlJtqjGPiqLvBDpk+5xtmUynGwefBAZTtB5LSXDHFLc4KHFruC2ZjIbk2IuANW5CZO/ktBISyULg8hsTn8DyQl/enEodqNxeSGCEQSru3FWM/cV5VDB4RBIBf2XKw55ODThrSqqkVc0g8UYusoMnYcmAzdh3O3xTRqeBSZqBVxnA/vf8VnD5h+WT3q2mcX+zdiScOOKRVNy0b2rRFrXNY+c/lv8AG60xOnuLxv5rsozTaOqlyjsRtLm5o1vtGO95DV63pUREMh0Y1QUZeRxIDR815Chl0c9LLNFIY45o5Hhustabm117Sqy30Or5dPU0FVM/NDA5zTYNGxuOpfRqatUJKLaV+PsfWaalCSV0sHk8wkohGvSCs6CHVkmo9w/VF6X0G/lE/uf3Xup8kvsvURP5GeafHdkgt6jvgjYzBv7R8F6MVfQb+U1Hu/3U9M6D/wApqfBn0Kh1Pkl9l6iqS+B+XqefDEWYu+KvoR/Kan3P7q/S+hH8pqfc/uodX5H5eoia+CXl6nn8xTNXoDW9B2i7slzgbyw/VX6Z0J1/9KqP9M/VT1fkfl6iK3wS8vU89mcFWjXo/S+hX8qn9z6lT0voX/K5vc/up63yMpW+CXl6nmJI/wAPhIzzurMa9N6X0K/lk3iz+6v0zoSP/rJv9P8AupdZ/Ayvd+CXl6nljEra0tK9R6Z0K/lsv+mfqp6b0K/l0vuH6qeu1/4ZcbLdQl5epcP8T0UqG+tSTEgbg1114+o2r2L8t9GoKOtpaWmnjNTGWhmac1zra14WodJj9m7zRU20pNq12eaeibasm7q/jb+TLIszjirkM1zaN3NZnOnH5buYK55T3PzNd7lk/aDjH/7ISUpzpy7O0Z+7a3jdAXTdh3mgdS3Y4pMaUspZMvYchvJ2HKHUBYZQlLJfcjNN1RL+yUTqeBDYRQlD1+yVRLtxRuZJd0YKXgiBBVRkYMBGCtpxf3j4IAracXd4+CVS4NHByMOCSCEYPcnUihwfwRBySD3IgePmkUizS1xTmP1LG1w3jmmtdxHNPCpYWErM6TJ7WRxVFo4+75rntepE/qM8R5rrVdo74e0SSsdYVCMVIXLD+KIP3lWq7FXtMjqCpVioXNEltqvSDeOazrCL2qR0vSCiFTvXN0g7Q5og/iOa91i17TI3S1H2bhvzR/uCP0l11y5X/ZvO4fMJuk4qes7lr2qRv9JUNQufpOKmkG9Y6pv6qRv9IVekHYufpBvCHSjeFHVK/Vs6BqTvVGpC52lbvHNCZNqnqs9+taNz6k50X9Z8kiSoJWN8nWi/c7/jrQukuidVsCp7ZKSsG+TWs7n4nBU53FLceKFzPlVJ3ZZdwSy4qEjHFASN/micgGyF29CXKiRvQ3UNhsq/Wf3NVEqies7uCEkILkEuqJUJQkqHIkEBysB3BS6sFFFIwuz+CsCTXhipdEDqSqKNKtJuajDZf081QJ3o7lKorJtig2Xc3mrbpjiANZGxEHKMOFuLvirUVfkpFhs+5vNGGT/o81A4o88pVBZLKAqhqLOasMqWgWzT44og5EHlIorJaYIbVHseJR5tTuZzV5x3lE1/iqUVktSAIqWtLiGWAubHGyICqsCGssRfXv8AFW95zJAOy74Iw82GOwL2lX5LUgQyq3R80WZVAYGPmVeeeCvSdyrSslqQJbWOaWkssdfW8VRbVjC0Z7iPmjz+5XnlZpWTdQsMq/8At8wpm1e6PmjzzvU0hXtKye1CXektzbtYc45otjioW1XZZzH1RPeSYtwePgVZed6jSr8mahebU/o5oS2pGox+BKaXnghL+5Y4rJDkxTm1TrElmGrHwQFtRub4EJpecUJcVDgskOQksn/RzQls+5nNNLjvQlyhwWQ2xNpb5tm3tfwVFs25qMu65/aPiqzii0J9yGwM2X9KEiQdlMJ1ISdalxWSGLIeSThfUhs/gjuhJRyiiQbPVYorlDdE0smFBFdBYgkHA7bq7FRGTMDBRAhLA4qwHXOOpLqeDRmcEQcNd0rNO8Ig09pIpSwaNCjSN/rO+KXmO7XkrDHDU/ySKUsFXHZw3hEHDeEkRv7fkrDH9vySKU8G3HhwwxCLPG9Zwx/b8lGskcAc8DX5KtcuLFJmkPbvRB4OohZxHJ7TyRCJ/tD7qtSngpMe53Vf+13wVh4s25GoX5JGikt+Jh3KaKXZJzC3VK97FXNIe3tBTPbvWcRSe08ir0UntPJe1TwVc0aRm9TSN3rK5krWl2kBtjqV6Kb2g5L2uXFj2o0Z7d/kpnA7Qs+ik9p5K9E/2nNoXtU8HtQ17vwzue35qF43hIMUh1yajcYKjHL7QeIKlynfgy44vG8Ki9u9J0UntMe5Vo5PaeRWOU8GNjS8Y4oc8b0pzJAWjOGOG7iqMcnbFuAKhzlglsYXg7UOdfagzH7X+Sosdsf5LNUsE3LJGd/T81VxjihzHXvnY6tSotd2kTlLAbYRcEBOtUWntKs129Q5SwZcu4Q3VWO9Sx3o3J4MuRUpY71AHHAAk8AT8ETkzD//2Q=="
        width={"80px"}
        height={"80px"}
        alt="Profile Logo"
        style={{ borderRadius: "50px", display: "inline-grid" }}
        onClick={handleLogoClick}
      />
      <br />
      <button
        style={{ display: "inline", marginBottom: "20px" }}
        onClick={handleFormToggle}
      >
        Edit Profile
      </button>

      {isFormVisible && (
        <div className="profile-form">
          <form onSubmit={handleSubmit}>
            
            <input
            style={{background:"green"}}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Email:</label>
            <br />
            <input 
            style={{background:"green"}}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label>Name:</label>

            <input
              type="tel"
              style={{background:"green"}}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label>Phone:</label>
            
            <input
            style={{background:"green"}}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label>Password:</label>

            <button type="submit"  onClick={handleFormToggle} >Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
