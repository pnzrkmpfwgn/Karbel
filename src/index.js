import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HelmetProvider,Helmet} from 'react-helmet-async';
import App from './App';

const app = (
    <HelmetProvider>
        <App>
            <Helmet>
                <meta
                    name="description"
                    content="Karbel Çelik şirketi, İzmir merkezli çelik konstrüksiyon şirketidir. Sandviç panel, çelik çatı, batar kat imalatı, mimari tasarım, makine imalatı ve birçok hizmeti bulunmaktadır."
                />
                <meta name="keywords" content="Karbel, Karbel Çelik, Mimar, Mimari, Tasarım, Mimari Tasarım, Karbel Mimari Tasarım, İzmir Mimari, İzmir Mimari Tasarım, İzmir Karbel Mimari Tasarım, Sundurma, Sundurma Çatı, Trapez, Trapez Saç, Çatı Panel,, Karbel Çelik konstrüksiyon, Çelik, Çatı, Çelik çatı, İzmir, İzmir çelik çatı, İzmir çelik, İzmir Karbel Çelik,Sandviç panel, Sandviç panel çatı,İzmir sandviç panel,İzmir sandviç panel çatı, çatı, Konveyör,İzmir konveyör, Helezon,İzmir helezon, Homojenizatör,İzmir homojenizatör, Paslanmaz çelik,İzmir paslanmaz çelik, Depo,İzmir depo, Çelik depo,İzmir çelik depo, İnşaat batar kat,İzmir inşaat batar kat, Fabrika batar kat,İzmir fabrika batar kat, Makina,Makina platform,İzmir makina platform, İmalat,İzmir imalat, Makina imalat,İzmir makina imalat, Karbel makina, Karbel imalat" />
                <meta name="author" content="Ülkü Ayberk Yiğit" />
                <title> Karbel Çelik </title>
                <script async src= {`https://www.googletagmanager.com/gtag/js?id=${process.googleAnalyticsId}`}></script>
                <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${process.googleAnalyticsId});
                `}
                </script>

            </Helmet>
        </App>
    </HelmetProvider>
)


ReactDOM.render(  app,document.getElementById('root')
);


