import React from 'react'

function LightButton(props){
  return(
    <svg onClick={() => {
      props.toggleLight()
    }} className='light-button' xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52">
      <g id="Group_36" data-name="Group 36" transform="translate(-27 -20)">
        <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(44 50)" fill="none" stroke={props.colors.textColor} strokeWidth="3">
          <circle style={{transition:'0.5s'}} cx="8.5" cy="8.5" r="8.5" stroke="none"/>
          <circle style={{transition:'0.5s'}} cx="8.5" cy="8.5" r="7" fill={props.colors.mainColor}/>
        </g>
        <g id="Polygon_1" data-name="Polygon 1" transform="translate(27 15)">
          <path style={{transition:'0.5s'}} d="M 37.11724090576172 42.5 L 35.61722183227539 42.5 L 13.8827600479126 42.5 C 11.53065967559814 42.5 9.425299644470215 41.28332138061523 8.250920295715332 39.24538040161133 C 7.076550006866455 37.20743179321289 7.079539775848389 34.77580261230469 8.258939743041992 32.74076080322266 L 19.87618064880371 12.69532108306885 C 21.05223083496094 10.66606140136719 23.15459060668945 9.454570770263672 25.5 9.454570770263672 C 27.84540939331055 9.454570770263672 29.94776916503906 10.66606140136719 31.12381935119629 12.69532108306885 L 42.74105834960938 32.74076080322266 C 43.92033004760742 34.77559280395508 43.9232292175293 37.20714950561523 42.74880981445313 39.24517059326172 C 41.57435989379883 41.28324127197266 39.46910858154297 42.5 37.11724853515625 42.5 L 37.11724090576172 42.5 Z"  fill={props.colors.mainColor} stroke="none"/>
          <path style={{transition:'0.5s'}} d="M 25.5 10.95457077026367 C 23.69582939147949 10.95457077026367 22.0786304473877 11.88648986816406 21.17399024963379 13.44745254516602 L 9.556751251220703 33.49288940429688 C 8.649520874023438 35.05831146240234 8.647209167480469 36.92880249023438 9.550579071044922 38.49645233154297 C 10.45394134521484 40.06409072875977 12.07344818115234 41 13.88275909423828 41 L 37.11724853515625 41 C 38.92630767822266 41 40.54571914672852 40.06401062011719 41.44915008544922 38.49623870849609 C 42.35256958007813 36.92851257324219 42.35036087036133 35.05810165405273 41.4432487487793 33.49288940429688 L 29.82601928710938 13.44745254516602 C 28.92136001586914 11.88648986816406 27.30415916442871 10.95457077026367 25.5 10.95457077026367 M 25.5 7.954566955566406 C 28.19028282165527 7.954566955566406 30.88056564331055 9.284107208251953 32.4216194152832 11.94318008422852 L 44.03886032104492 31.98862075805664 C 47.12957000732422 37.32161712646484 43.28084564208984 44 37.11725616455078 44 C 37.11687850952148 44 37.11761474609375 44 37.11724090576172 44 L 13.88275909423828 44 C 7.718509674072266 44.0000114440918 3.8702392578125 37.32194137573242 6.961139678955078 31.98862075805664 L 18.5783805847168 11.94318008422852 C 20.11943435668945 9.284107208251953 22.80971717834473 7.954566955566406 25.5 7.954566955566406 Z" stroke="none" fill={props.colors.textColor}/>
        </g>
      </g>
    </svg>
  )
}

export default LightButton;