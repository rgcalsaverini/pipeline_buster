var React = require('react');

module.exports = React.createClass({
  displayName: 'BoxPipeIcon',

  PropTypes: {
    style: React.PropTypes.object,
  },

  render: function(){
    var styles={
      contour: {
        contour: this.props.style.contour || 'rgba(255, 255, 255, 0.8)',
      },

      fill: {
        fill: this.props.style.fill || 'rgba(255, 255, 255, 0.2)',
      }
    };

    return (
      <svg style={this.props.style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3810.093 3517.7927">
        <path style={styles.fill} d="M13.7227 1303.97639l8.8388 1124.74171L2139.4624 3491.588l252.3087-230.5541 6.25-1137.5-73.4956-1.4129-83.4165-52.4805-691.6388-348.0292-15.468-48.6136 14.3632-17.6776 605.4601-303.83498 129.268-99.43689-.5524-9.11505 74.025-72.09174 25.412-25.13544 16.543-1059.68832-52.451-46.82331-38.946 16.57281-249.728 125.57922-1721.875 860.9375-104.1421 49.56045-151.3651 153.02233-41.9844 59.10971z"/>
        <path style={styles.contour} d="M2329.79644.0021V45.715h1.5683v41.6543c-.523.062-1.0453.1186-1.5683.1934V45.715h-91.4297v45.0078h-.01v.2266h.01v.4805h45.7051v43.623h-44.1368v1.6113h-1.5683V91.4299h-.01v-.4805h-1.2754v.4805h-90.1445v45.2343-2.7441c-1.385.4479-2.4433 1.2526-2.7324 2.7441h2.7227v.4805h-91.416v43.7188l-.012.01v1.5039h-1.1347c-.093.1568-.1628.3217-.2442.4824h-90.0312v45.2325h-.01v-1.6426c-.1626 0-.3257 0-.4883.01-.6331.5061-1.1504 1.0544-1.5781 1.6328h2.0644v.4804h-91.4179v42.3692s-.01.01-.012.01v2.8555h-2.125c-.07.1567-.1208.3204-.1816.4805h-89.1094v45.2344h-.01v.4804h-91.4121v43.5488c-.01.0003-.01-.0002-.016 0v1.6836h.016v.4629h-.01v.018h.012v-.018h45.6953v45.252h1.6231v43.9863h91.4277v-43.9863h1.582c.3858-.547.6761-1.1275.9141-1.7266h88.9336V365.456c.069-.074.145-.1456.2109-.2207h-.2109v-1.7265h91.4258v-43.9863h.9101c.5901-.5383 1.0624-1.118 1.4473-1.7286h89.0722v-42.3964c.5573-.4981 1.0205-1.029 1.3985-1.5899h-1.3985v-1.7285h45.7071v1060.4805h-45.0313v45.7011h91.4239v-45.7011h-.6778v-.072h45.6016v-45.7129h45.7129v-45.7148h45.7129v-45.7149h-1.5078v-7.25h-45.7051v-45.7148h-45.7129v45.7148h45.7031v45.7149h1.5078v7.25h-1.5078v-7.25h-45.7129v45.7129h1.5078v7.2519h-1.5078v-7.2519h-44.0918v-45.7129h44.0918v-45.7149h-44.0918v-45.7148h44.0918v-45.7149h-44.0918v-45.7148h44.0918v-45.7129h-44.0918v-45.7148h44.0918v-45.7149h-44.0918V868.095h44.0918v-45.7148h-44.0918v-45.7149h44.0918v-45.7148h-44.0918v-45.7129h44.0918v-45.7148h-44.0918v-45.7149h44.0918v-45.7148h-44.0918v-45.7149h44.0918v-45.7129h-44.0918v-45.7148h44.0918v-45.7149h-44.0918v-45.7128h44.0918v-45.7149h-44.0918v-45.7148h44.0918v-1.6114h1.5781v-44.1035h44.1348v-1.6113h1.5781v-44.1016h44.1368v-1.6113h1.5761V90.9505h44.1387v45.7148h-45.7031v45.7129h45.7031v45.7149h-45.7031v45.7148h45.7031v45.7149h-45.7031v45.7128h45.7031v45.7149h-45.7031v45.7148h45.7031v45.7129h-45.7031v45.7129h45.7031v45.7148h-45.7031v45.7149h45.7031v45.4042h-45.7031v-45.4042h-45.7168v45.7148h17.4453v45.7129h-17.4453v45.7148h17.4453v45.4043h28.2715v.3106h45.7031v45.7148h-45.7031v45.7129h45.7031v45.7149h-45.7031v45.7148h45.7031v45.7129h-45.7031v45.7129h45.7031v45.7149h1.2578l.25 7.25h-1.5078v-7.25h-45.7031v-45.7149h-45.7168v45.7149h45.7051v45.7148h1.5078v7.25h45.7148v-43.4472h44.8926v-45.7012h-.6778v-284.127h63.1583v45.7149h45.7148v45.7148h45.7148v45.7129h45.7129V776.3509h-45.7129V730.638h-45.7148v-45.7149h-108.8731V-.0007h-91.4257zm-45.7168 1096.6621v-45.7148h-45.7129v45.7148h45.7129zm0-45.7148h45.7168v-45.7129h-45.7168v45.7129zm0-45.7129v-45.7148h-45.7129v45.7148h45.7129zm0-45.7148h45.7168v-45.7149h-45.7168v45.7149zm0-45.7149v-45.7129h-45.7129v45.7129h45.7129zm0-45.7129h45.7168v-45.7148h-45.7168v45.7148zm0-45.7148v-45.7149h-45.7129v45.7149h45.7129zm0-91.4297v-45.7129h-45.7129v45.7129h45.7129zm0-91.4277v-45.7149h-45.7129v45.7149h45.7129zm0-45.7149h45.7168V548.092h-45.7168v45.7148zm0-45.7148v-45.7149h-45.7129v45.7149h45.7129zm0-45.7149h45.7168v-45.7129h-45.7168v45.7129zm0-45.7129v-45.7148h-45.7129v45.7148h45.7129zm0-45.7148h45.7168v-45.7149h-45.7168v45.7149zm0-45.7149v-45.7128h-45.7129v45.7128h45.7129zm0-45.7128h45.7168v-45.7149h-45.7168v45.7149zm0-45.7149V228.092h-45.7129v45.7148h45.7129zm0-45.7148h45.7168v-45.7149h-45.7168v45.7149zm-594.2793 137.623h-.01v-.4805h-1.832c-.1118.1556-.196.3205-.2949.4805h-89.2911v45.2347h-.01v-.5352c-.1825.1747-.3531.3528-.5136.5352h.5097v.4844h-91.414v42.6093c-.01.0002-.01-.0001-.016 0v2.6211h-2.9511c-.084.1563-.1471.3204-.2207.4805h-88.2325v45.2344h-.02v.4765h-91.4062v44.8262c-.01.01-.015.013-.022.019v.3907h-.3477c-.1288.1529-.2272.3167-.3418.4746h-90.7109v45.2402h-.029v.4688h-91.3965V637.75c-.01.01-.02.017-.029.025v1.7461h.029v.457h45.6836v45.2578h1.6328v43.9746h91.4238v-43.9769h1.9395c.4246-.5503.7454-1.1374 1.0098-1.7441h88.4765v-43.5021c.1716-.1557.3546-.3073.5098-.4688h-.5098v-1.7246h-1.625v-43.9883h1.6231v43.9688h91.4238v-43.9688h1.1523c.6501-.5407 1.1722-1.1263 1.5977-1.7461h88.6816v-42.3242h.1797c.6361-.5084 1.1552-1.0593 1.584-1.6406h-1.7637v-1.7266h91.4258v-43.9883h.3692c.4968-.5415.8767-1.1243 1.1953-1.7285h89.8613v-43.707c.2429 0 .486-.01.7285-.016.1067-.085.2023-.1742.3027-.2617h-1.0312v-1.7285h-1.6211v-43.9863h-45.7031v-45.2344zm-502.8633 319.5215h-45.6836v-45.25h-.027v-.4648h-1.5195c-.097.1506-.17.3102-.2559.4648h-89.623v45.25h-.031v.4609h-91.3945v42.3614c-.011.0003-.022-.0003-.033 0v2.8906h.033v.457h-.033v-.457h-2.5313c-.073.1488-.1254.305-.1894.457h-88.6758v45.2578h-.033v.4844h-91.4082v43.707c-.01.0002-.013-.0001-.02 0v1.5235h.02v.4824h45.6933v45.2324h1.6446v43.959h91.4277v-44.7051c.3333-.3224.6319-.6579.8926-1.0058h90.5332v-42.5899c.2422 0 .4847-.01.7266-.016.532-.4253.9804-.8804 1.3652-1.3574h-2.0918v-1.7403h-1.6406v-43.9746h-45.6817V731.408h45.6817v45.2558h1.6406v43.9668h91.4238v-43.9668h.6426c.5464-.5434.9676-1.1306 1.3203-1.7422h89.4629v-45.7031h-1.6328v-43.9824zm594.2851-365.7148v-1.1758c-.3142.377-.588.769-.8222 1.1758h.8222zm411.4297-182.377h45.717v43.6211h-44.1386v1.6113h-1.5782v43.9883h-45.7148v-43.5059h.012v-.4824h45.7031v-45.2324zm-137.1445 45.2324v.4824-.4824zm.01.4824h45.6953v45.2325h-45.6953v-45.2325zm45.7031 45.2325h1.6153v43.9863h-1.6172V228.092zm-91.4219.4804h45.7151v43.5059h-44.0957v1.7285h-1.6172v-45.2344zm-137.1484 45.2344h.01v.4785h45.7031v45.2364h-45.7012v-45.2344h-.012v-.4805zm91.4414 0h45.7031v43.9863h-45.7129v-43.5078h.01v-.4785zm-45.7266 45.7149h1.6211v43.9863h-1.6211v-43.9863zm-91.4277.4804h45.7132v43.5059h-44.0899v1.7265h-1.623v-45.2324zm-45.7031 45.2324h45.7011v43.9883h-45.7109v-43.5254h.01v-.4629zm-137.1504 46.1778h45.717v43.5234h-44.0918v1.7285h-1.623v43.9864h-45.7149v-43.5215h.012v-.4671h45.7031v-45.25zm-137.1485 45.2519h.012v.4649h45.6972v45.248h-45.6933v-45.2324h-.016v-.4805zm-91.4277 43.8653c-.6974.5697-1.2561 1.1891-1.7012 1.8476h1.7012v-1.8476zm137.1406 1.8476h1.6211v43.9883h-1.6211v-43.9883zm-91.4238.4707h45.7133v43.5176h-44.084v1.7266h-1.6289v43.9863h-45.7148v-43.5195h.02v-.4668h45.6953v-45.2442zm-137.1426 45.2442h.02v.4668h45.6914v45.248h-45.6914v-45.2402h-.02v-.4746zm-91.4336 42.9589c-.1567 0-.3139.01-.4707.01-1.0263.8205-1.7543 1.7458-2.2695 2.7461h2.7402v-2.7559zm45.7168 3.2168h45.7144v43.5293h-44.0879v1.7247h-1.627v43.9863h-45.7168v-43.5293h.029v-.457h45.6875v-45.254zm-228.5722 90.7461c-.063.073-.1256.1482-.1856.2227h.1856v-.2227zm45.7148.6758h45.7145v43.5293h-44.08v1.7305h-1.6348v43.9805h-45.7148v-43.5215h.031v-.4613h45.6836v-45.2578zm-228.5723 89.3457c-.5308.511-.9667 1.0555-1.3203 1.6289h1.3203v-1.6289zm45.7129 2.086h45.7166v43.5175h-44.0722v1.7403h-1.6446v43.9707h-45.7129v-43.4883h.021v-.4824h45.6914v-45.2578zm1708.877 44.9472v182.8574h45.7129v45.7149h45.7148v45.7129h45.7149v45.7148h45.7129v45.7149h45.7148v411.4277h45.7148v45.7148h45.7129v45.7129h91.4278v-137.1425h-45.7129v-411.4278h-45.7129v-45.7148h-45.7129v-45.7129h-45.7149v-45.7149h-45.7128v-45.7148h-45.7149v-45.7129h-45.7148v-45.7148h-45.7149v-45.7149h-45.7129zm-1848.2481.3106c-.1203.1564-.2118.3231-.3183.4844h-88.8594v45.2304h-.021v.4844h-91.4082v43.7246c-.01.01-.015.013-.021.02v1.4844h.021v.4863h45.6914v45.2286h-45.6914v-45.2286h-.021v-.4863h-1.1191c-.093.1579-.1628.3244-.2441.4863h-90.0411v45.2286h-.021v.4843h-91.4082v42.3672c-.01.01-.014.012-.019.018v2.8457h.019v.4844h45.6934v45.2285h1.6348v43.9902h91.4277v-43.9902h.9121c.5918-.537 1.0663-1.1155 1.4531-1.7246h89.0625v-42.3946c.5614-.4988 1.0274-1.0316 1.4082-1.5937h-1.4082v-1.7246h-1.6347v-43.9902h1.6465v43.9628h91.4277v-43.9628h2.2519c.4645-.5505.8185-1.1391 1.1114-1.75h88.0644v-43.4338h.1739c.2147-.1717.4137-.3489.6035-.5293h-.7774v-1.7461h-1.6445v-43.9649h-45.6934v-45.2304h-.02v-.4844h-2.2305zm-363.4824 182.8574h-2.1055c-.07.1579-.1209.3231-.1816.4844h-89.1211v45.2304h-.023v.4844h-91.4043v43.5293h-43.4395v44.3965c-.643.073-1.2866.1458-1.9277.2324-.1374.1901-.2463.3893-.3692.584v.5h-43.4179v42.8965c-.1073.016-.215.026-.3223.043-.738.8087-1.2148 1.754-1.543 2.7753h-43.8496v45.6915h-.6621v.023h-45.0527v45.6914H.00014v1188.5605h91.4258v45.7149h91.4277v-45.7149h-91.4258v-45.7128h-45.7129V1323.5115h45.7129v-45.6895h.6621v-.023h90.7657v-43.9902h.6757c.3215-.1087.6449-.21.9629-.334.046-.4623.073-.9277.1153-1.3906h89.6758v-43.8086c.2566-.056.5176-.1069.7578-.1817h-.7578v-1.7246h-1.6368v-43.9902h-45.7109v43.9902h-43.4199v-43.9902h43.4199v-1.6992h2.2949v-44.0157h33.8047l9.6113.4825v45.2324h1.6368v43.9902h91.4257v-43.9902h1.5899c.387-.5459.6785-1.1248.9179-1.7227h88.9219v-43.7695c.071-.075.1479-.1467.2149-.2227h-.2149v-1.7226h-1.6347v-43.9922h-45.6934v-45.2285h-.018v-.4844zm-226.9414 1506.8379v45.7148h91.4297v-45.7148h-91.4297zm91.4297 45.7148v45.7129h91.4199v-45.7129h-91.4199zm91.4199 45.7149v45.7148h91.4297v-45.7148h-91.4297zm318.375-1735.4102v-2.9492c-1.0704.8783-1.8119 1.8718-2.3164 2.9492h2.3164zm45.7149.4824h45.7164v43.4844h-44.0684v1.7461h-1.6465v43.9629h-45.7148v-43.4766h.019v-.4863h45.6934v-45.2305zm-228.5723 89.2872c-.1522 0-.3049.01-.457.01-.639.5107-1.16 1.0641-1.5899 1.6485h2.0469v-1.6582zm45.7148 2.1425h45.7114v43.5059h-44.0801v1.7246h-1.6309V960.006zm-45.6933 45.2305h45.6914v43.9902h-45.7149v-43.5058h.024v-.4844zm-182.8887 44.5625c-.3037.3691-.5693.7528-.7969 1.1504h.7969v-1.1504zm45.7188 1.6367h45.7134v43.5059h-44.0821v1.7226h-1.6308v-45.2285zm-45.6934 45.2285h45.6914v43.9922h-45.7148v-43.5078h.023v-.4844zm-137.166 89.7285h1.6328v1.7012h-1.6328v43.9903h-43.418v-43.9903h43.418v-1.7012zm1830.8906 191.877v45.7031h91.4258v-45.7031h-91.4258zm-91.4277 45.7109v45.7032h91.4277v-45.7032h-91.4277zm-91.4258 45.709v45.709h-91.4297v45.7148h91.4277v-45.7129h91.4278v-45.7132h-91.4258zm1752.2732 83.4922v137.1425h-411.428v-.3105h-45.715v-45.0899h-45.712v-45.7148h-45.7151v319.3731h45.7151v-45.7129h45.712v-45.0899h45.715v-.3125h411.428v137.1426h45.713v-45.7129h45.715v-45.7168h45.715v-45.7129h45.713v-45.7148h45.714v-45.7129h-45.714v-45.7168h-45.713v-45.7129h-45.715v-45.7129h-45.715v-45.7168h-45.713zm-1935.1443 7.9609v45.7129h91.4277v-45.7129h-91.4277zm-91.4277 45.7149v45.7148h91.4277v-45.7148h-91.4277zm-91.4297 45.7168v45.7148h-91.4258v45.7129h45.4141v.3399h45.7128v45.7129h45.7149v-43.7579h45.7148v43.7579h44.4004v1.955h1.3145v43.7598h45.7148v-43.7598h44.3985v-1.955h.6093c-.1999-.083-.4061-.1453-.6093-.2168v-43.5411h-90.1114v-1.5117c-.2315-.1599-.4671-.3043-.705-.4433h-.6094v-43.7598h-89.2285c-.2696-.2751-.5645-.5179-.8868-.7246v.7246h-1.3144v-2.293h47.3281v-45.7148h-91.4297zm226.959 139.4355v43.7598h-44.3985v45.7148h45.7129v-43.7597h45.7149v43.7597h44.4004v1.9551h1.3124v43.7578h45.7168v-43.7578h44.3985v-1.9551h.5527c-.1805-.1113-.3685-.1972-.5527-.2968v-43.461h-90.1153v-.4804c-.4269-.2586-.8666-.4734-1.3124-.67v-44.5664h-88.4649c-.03-.234-.052-.4693-.084-.7031-.5051-.3642-1.0308-.6586-1.5664-.9238v1.6269h-1.3144zm92.7421 135.1875h-45.7128v45.7149h45.7128v-45.7149zm0 45.7149v45.7148h45.7168v-45.7148h-45.7168zm45.7168 0h45.7149v-43.7578h45.7148v43.7578h44.4102v1.9844h1.3027v43.7304h45.7129v-43.7304h44.4141v43.7304h-44.4141v45.7149h45.7149v-43.7364h45.7148v43.7364h44.4102v1.9746h1.3046v43.7402h45.7149v45.7129h45.7148v-43.7422h45.7129v43.7422h44.4063v1.9688h1.3066v43.6093h-45.6621v.1367h-.051v45.5782h-45.6621v.1367h-.051v45.5801h-45.664v.1347h-.051v-45.7148h-45.7149v45.7148h45.7129v45.4903h-45.7148v-45.4903h-45.4102v-.2246h-.3047v-45.4902h-45.7128v-45.7149h-45.7149v45.4942h-45.7129v-45.4942h-45.4062v-.2268h-.3067v-45.4883h-45.7148v45.4883h-45.4063v-45.4883h45.4063v-45.7129h-45.7149v45.4883h-45.7168v-45.4883h-45.416v-.25h-.2968v-45.4648h-45.7149v45.4648h-45.416v.25h-.2969v1.6465c.097.056.199.098.2969.1504v43.666h91.1309v.25h.3105v45.4922h88.4668c.01.074.017.1467.027.2207h2.625v-.2207h.3106v.2207h-.3106v1.6133c.102.039.2077.064.3106.1v43.7754h91.1191v.2285h.3067v45.4844h88.8535c.01.077.012.1519.021.2285h2.2422v2.7539c.1013.045.2064.076.3086.1172v42.6074h91.121v.2344h.3027v45.4785h45.0313v1087.9766h-45.711v-45.7148h-91.4296v45.7148h91.4277v45.7129h91.4258v-44.375h45.5937v-44.3613c.1668-.049.3359-.086.502-.1387v-1.2149h45.2109v-42.4726c.167-.021.3351-.039.502-.061v-3.1835h45.2129v-43.0313c.167-.018.334-.032.5-.051v-2.6328h45.2148v-44.8477h44.2227v-458.5546h108.8652v-45.7129h45.7148v-45.7149h45.7129v-182.8574h-45.7129v45.7148h-45.7148v45.7149h-45.7148v45.7129h-63.1504v-537.9922h.6777v-45.7012h-90.1152v-.4062c-.423-.2987-.8617-.5503-1.3067-.7793V2066.32h-88.998c-.042-.3376-.076-.6765-.1211-1.0136-.326-.2349-.662-.4362-1-.6289v1.6425h-1.3067v43.7325h-44.4062v-43.7383h44.4082v-1.9746h.6426c-.2108-.1019-.4276-.1813-.6426-.2696v-43.4589h-90.1231v-1.9864h-1.3046v-43.7326h-89.6524c-.01-.062-.015-.1239-.023-.1855-.146-.1052-.3002-.1847-.4492-.2813v.4668h-1.3028v-45.7129h-90.125v-1.6641c-.225-.1194-.4555-.2194-.6855-.3222h-.6309v-43.7539h-90.0293c-.029-.2465-.051-.496-.082-.7422v.7422h-1.3164v43.7578h-44.3985v45.7129zm320 45.7148h1.3868c-.451-.2932-.9128-.5481-1.3868-.7676v.7676zm-137.5214 1407.7403v-45.7149h-91.4278v45.7149h91.4278zm-91.4278-45.7149v-45.7148h-91.4277v45.7148h91.4277zm183.2324-1042.0254h-2.8964c0 .031-.0005.063.01.094.913.6546 1.8817 1.1224 2.8867 1.4746v-1.5664zm-182.8535-91.4277h-1.332c.04.3057.07.6128.1094.918.398.2869.8056.539 1.2226.7636v-1.6816zm-182.8595-91.4297h-1.9786c.068.5836.1324 1.1681.211 1.75.5679.4094 1.1616.7322 1.7676 1.0176v-2.7676zm-91.4278-45.7129v-.2519h.2969v-45.4629h45.416v-45.7149h-45.7129v45.4649h-45.7148v-45.4649h-45.416v-.2519h-.2989v-45.4629h-45.7148v45.4629h-45.416v.2519h-.2989v.5645c.098.049.2002.085.2989.1308v44.7676h91.1308v.252h.2989v45.4629h90.0371c.01.084.017.1681.027.2519h1.0664zm-91.4297-45.7148h-2.3613c.016.1229.028.2464.045.3691.7392.5329 1.5142.9456 2.3164 1.2734v-1.6425zm-91.4297-45.7149v-.2519h.2989v-45.4629h45.416v-45.7129h-45.7149v45.4629h-45.7128v-45.4649h45.7128v-45.7129h-45.7148v45.7129h-45.4121v-.25h-.2988v-45.4629h45.7109v-45.7148h-45.7129v45.7148h-45.7109v45.4629h-45.418v.25h-.2969v1.7422c.098.032.1982.054.2969.084v43.6387h91.1309v.25h.2988v45.4629h89.75c.1333.087.2686.1664.4023.2519h.9746zm-91.4277-182.8574v-45.7148h-45.7129v45.7148h45.7129zm-45.7129 0h-45.7148v45.4629h-45.7168v-45.4629h-45.4141v-.338h-.2988v-.7539c-.227.2439-.428.497-.6172.7539h-90.5117v45.8009h91.1289v.2519h.2988v45.4629h89.1563c.015.083.025.167.041.25h1.9336v-.25h.2969v-45.4629h45.4179v-45.7148zm-137.1445 45.7148h-.8399c.121.3722.2383.7455.379 1.1133.1536.01.3073.015.4609.025v-1.1387zm.2988-46.0527h45.4141v.3379h45.7168v-.3379h.2969v-45.3769h45.4179v-.3379h45.7129v.3379h45.7129v-45.7129h-45.4141v-.3399h-.2988v-3.0566c-.227.01-.4546.012-.6816.018-1.1235.8982-1.8729 1.9277-2.3907 3.039h-88.0585v43.3574h-.1485c-.052.042-.097.087-.1484.129v2.2246h-91.1309v45.7148zm228.2715-45.3769v45.7148h45.7148v-45.7148h-45.7148zm45.7148 45.7148v45.7148h45.7149v-45.7148h-45.7149zm45.7149 0h45.7148v-45.7148h-45.7148v45.7148zm45.7148 0v45.7148h45.7149v-45.7148h-45.7149zm45.7149 45.7148v45.7129h45.7148v-45.7129h-45.7148zm0 45.7129h-45.7149v45.7149h45.7149v-45.7149zm0 45.7149v45.7148h45.7148v-45.7148h-45.7148zm45.7148 0h45.7129v-45.7129h-45.7129v45.7129zm45.7129 0v45.7148h45.7149v-45.7148h-45.7149zm45.7149 45.7148v45.7149h45.7128v-45.7149h-45.7128zm45.7128 45.7149v45.7148h45.7168v-45.7148h-45.7168zm45.7168 0h45.7149v-45.7149h-45.7149v45.7149zm45.7149-45.7149h45.7148v-45.7148h-45.7148v45.7148zm45.7148 0v45.7149h45.7129v-45.7149h-45.7129zm45.7129 45.7149v45.7148h45.7129v-45.7148h-45.7129zm45.7129 45.7148v45.7129h45.7149v-45.7129h-45.7149zm45.7149 0h45.7148v-45.7148h-45.7148v45.7148zm45.7148 0v45.7129h45.7148v-45.7129h-45.7148zm45.7148 45.7129v45.7148h45.7149v-45.7148h-45.7149zm45.7149 45.7148v45.7149h45.7148v-45.7149h-45.7148zm45.7148 0h45.7129v-45.7148h-45.7129v45.7148zm-91.4297 0h-45.7148v45.7149h45.7148v-45.7149zm-45.7148 0v-45.7148h-45.7148v45.7148h45.7148zm-91.4297-45.7148h-45.7129v45.7148h45.7129v-45.7148zm-45.7129 0v-45.7129h-45.7129v45.7129h45.7129zm-45.7129-45.7129v-45.7148h-45.7148v45.7148h45.7148zm-365.7168-182.8594v-45.7129h-45.7148v45.7129h45.7148zm182.8575 0v-45.7129h-45.7149v45.7129h45.7149zm1249.7285-236.5566v45.7129h45.7129v-45.7129h-45.7129zm-1523.7149 9.9414h44.0996v43.7598h-44.3984v-.3399h.2988v-43.4199zm1523.7149 80.8613v45.7149h-45.7149v45.7148h-45.7129v45.7129h-45.7148v411.4297h-45.7148v45.7129h-45.7129v45.7148h-45.7149v45.7149h-45.7148v45.7129h182.8574v-45.7129h45.7148v-45.7149h45.7129v-45.7148h45.7129v-411.4278h45.7129v-182.8574h-45.7109zm-1618.4531 191.4688c.049.4002.091.8018.1445 1.2012.9056.6529 1.8674 1.1204 2.8652 1.4726v-2.6738h-3.0097zm963.0585 228.5722h43.6719v45.7149h-43.7246v45.7148h43.7246v45.7129h-43.7246v45.7149h43.7246v45.7148h-43.7246v45.7129h43.7246v45.7148h-43.7246v45.7149h43.7246v45.7148h-43.7246v45.7149h43.7246v37.0996h-43.7246v-37.0996h-45.7129v45.7129h15.4434v45.7148h-15.4434v45.7149h15.4434v37.0996h30.2695v8.6152h43.7246v45.7129h-43.7246v45.7148h43.7246v45.7149h-43.7246v45.7129h43.7246v45.7148h-43.7246v45.7149h43.7246v45.7148h-43.7246v45.7148h43.7246v38.5137h-43.7246v-38.5137h-45.7129v45.7129h43.7246v38.5137h1.4883v7.2012h-45.2129v37.6465h-.5019v8.0683h-45.211v37.6465h-.5039v8.0684h-45.2109v37.6464h-.3809v-37.6464h.3809v-45.7149h-.3809v-45.7148h.3809v-45.7149h-.3809v-45.7129h.3809v-45.7148h-.3809v-45.7148h.3809v-45.7149h-.3809v-45.7148h.3809v-45.7129h-.3809v-45.7149h.3809v-45.7148h-.3809v-45.7129h.3809v-45.7148h-.3809v-45.7149h.3809v-45.7148h-.3809v-45.7129h.3809v-45.7149h-.3809v-45.7148h.3809v-45.7149h-.3809v-45.7148h.3809v-45.7129h-.3809v-45.7148h.3809v-.2364h.2969v-45.4785h45.4179v-.1347h.049v-45.5782h45.664v-.1347h.051v-45.5801h45.6621v-.1367h.049v-45.5782zm-45.7617 91.4297v45.7129h45.7129v-45.7129h-45.7129zm0 45.7129h-45.7129v45.7149h45.7129v-45.7149zm0 45.7149v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7129v45.7129h45.7129v-45.7129zm0 45.7129v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7129v45.7149h45.7129v-45.7149zm0 45.7149v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7129v45.7149h45.7129v-45.7149zm-45.7129 45.7149h-45.7148v45.7129h45.7148v-45.7129zm0 45.7129v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7148v45.7149h45.7148v-45.7149zm0 45.7149v45.7148h45.7129v-45.7148h-45.7129zm45.7129 45.7148v45.7129h45.7129v-45.7129h-45.7129zm0 45.7129h-45.7129v45.7148h45.7129v-45.7148zm0 45.7148v45.7149h45.7129v-45.7149h-45.7129zm0 45.7149h-45.7129v45.7129h45.7129v-45.7129zm0 45.7129v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7129v45.7149h45.7129v-45.7149zm0 45.7149v45.7148h45.7129v-45.7148h-45.7129zm0 45.7148h-45.7129v45.7148h45.7129v-45.7148zm-45.7129 45.7148h-45.7148v45.7129h45.7148v-45.7129zm0 45.7129v45.7149h45.7129v-45.7149h-45.7129zm0 45.7149h-45.7148v45.7148h45.7148v-45.7148zm0-137.1426v-45.7148h-45.7148v45.7148h45.7148zm0-91.4297v-45.7129h-45.7148v45.7129h45.7148zm0-91.4277v-45.7149h-45.7148v45.7149h45.7148zm0-91.4297v-45.7129h-45.7148v45.7129h45.7148zm0-274.2852v-45.7148h-45.7148v45.7148h45.7148zm0-91.4297v-45.7128h-45.7148v45.7128h45.7148zm0-91.4277v-45.7148h-45.7148v45.7148h45.7148zm-228.2656-182.8574h45.4043v45.4902h-45.4062v.2246h-.3067v-.2304h.3086v-45.4844zm609.4219 265.6738v182.8555h45.7129v-45.7129h45.7148v-45.7149h45.7149v-45.7148h45.7148v-45.7129h-182.8574zm-2164.3926 136.3477v45.7129h91.4277v-45.7129h-91.4277zm91.4277 45.7148v45.7129h91.4278v-45.7129h-91.4278zm91.4414 45.7344v45.7148h91.4297v45.709h91.4258v-45.7151h-91.4277v-45.7129h-91.4278zm182.8555 91.4375v45.7031h91.4278v-45.7031h-91.4278zm91.4278 45.7109v45.7032h91.4257v-45.7032h-91.4257zm91.4257 45.7129v45.7012h91.4239v-45.7012h-91.4239zm91.4239 45.711v45.7031h91.4257v-45.7031h-91.4257zm91.4257 45.707v45.7031h91.4239v-45.7073h-91.4239zm91.4239 45.7187v45.6954h91.4258v-45.6996h-91.4258zm91.4258 45.7266v45.6936h91.4238v-45.6934h-91.4238zm91.4238 45.6934v.017h.01v-.017h-.01zm.01.017v45.6934h91.4219v-45.6934h-91.4219zm91.4219 45.6934v45.7143h91.4297v-45.7148h-91.4297zm91.4297 45.7168v45.7129h91.4258v-45.7129h-91.4258zm91.4277 45.7129v45.7129h91.4278v-45.7129h-91.4278z"/>
      </svg>
    );
  },
});
