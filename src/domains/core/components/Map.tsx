import { useState, useEffect } from 'react';

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat, transform, transformExtent, get } from 'ol/proj';
import { Style, Icon } from 'ol/style';
import { marker_map } from 'assets';
import { geocode, NominatimResponse } from "nominatim-browser";
import { boundingExtent } from 'ol/extent';

interface mapProps {
  markerDrop?: boolean;
  location?: string;
}

type Props = mapProps;
const MapGeo = (props: Props) => {

  const [map, setMap] = useState<Map>();
  const [layer, setLayer] = useState<any>();

  const { markerDrop, location } = props;

  let lat: number, lon: number, boundingBox = [];

  let icon_marker = new Icon({
    anchor: [0.5, 1],
    src: marker_map
  });

  useEffect(() => {

    geocode({
      city: location
    })
      .then((results: NominatimResponse[]) => {
        var result = results[0];

        lat = parseFloat(result.lon);
        lon = parseFloat(result.lat);
        boundingBox = result.boundingbox;

        initializeMap(lat, lon, boundingBox);

      })
      .catch((error: any) => {
        console.error(error);
      });



  }, [])

  const initializeMap = (lon: number, lat: number, boundingBox: string[]) => {
    const flayer = new VectorLayer({
      source: new VectorSource({
        features: []
      }),
      style: function (feature) {
        let style = new Style({
          image: icon_marker
        })

        return style;
      }
    })

    let bb = boundingExtent([
      [parseFloat(boundingBox[3]), parseFloat(boundingBox[1])],
      [parseFloat(boundingBox[2]), parseFloat(boundingBox[0])]
    ])

    bb = transformExtent(bb, get('EPSG:4326'), get('EPSG:3857'));

    if (markerDrop) {
      flayer.setSource(new VectorSource({
        features: [
          new Feature({
            geometry: new Point(transform([lon, lat], 'EPSG:4326', 'EPSG:3857'))
          })
        ]
      }))
    }

    // create map
    const initialMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        flayer
      ],
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: 15
      }),
      controls: []
    })

    initialMap.getView().fit(bb);

    setMap(initialMap)
    setLayer(flayer)
  }

  return (
    <div id="map" className="map-container" style={{ height: '100%', width: '100%' }}></div>
  )
}

export default MapGeo;