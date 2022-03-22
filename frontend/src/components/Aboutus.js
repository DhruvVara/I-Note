import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Aboutus.css";


const Aboutus = () => {

    let history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push("/login")
        }
    })

    return (
        <>
            <div className="about_container">
                <div className="about">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ante id velit pharetra ultrices non sed nisi.
                        Aenean pretium et justo et lacinia. Praesent molestie nec ligula viverra efficitur. Cras ac neque a neque imperdiet
                        condimentum. Pellentesque non pulvinar erat, eu volutpat nisi. Vivamus pellentesque lectus et ante malesuada
                        pellentesque. Pellentesque quis lectus nec diam ultrices blandit eget non mi. Nullam suscipit congue ultrices.
                        Cras eu vehicula magna. Aenean id suscipit erat. Phasellus blandit pulvinar nulla, nec commodo ex viverra id.
                    </p>
                    <p>
                        Quisque nulla ante, lacinia in nunc vel, viverra elementum ligula. Pellentesque tellus arcu, ultricies quis
                        placerat eget, ullamcorper quis leo. Suspendisse suscipit gravida sapien et iaculis. Proin laoreet bibendum
                        sapien vel suscipit. Sed ultricies erat mi, a tempus dolor eleifend tempor. Phasellus vehicula sagittis velit,
                        et fermentum orci efficitur at. Nunc at nisl rutrum, pretium justo nec, sodales nibh. Morbi metus erat, feugiat
                        vitae sollicitudin quis, varius nec eros. Curabitur quis magna nec purus dictum vestibulum ac quis ligula.
                        Morbi ac mattis lacus.
                    </p>
                    <p>
                        Cras ultricies aliquam imperdiet. Ut non risus est. Cras vitae tincidunt velit. Praesent sit amet velit turpis.
                        In pellentesque vestibulum erat, eu hendrerit lorem consectetur feugiat. Nullam dapibus, tortor quis pharetra
                        sollicitudin, ante magna varius magna, ut efficitur diam ligula non nisi. Phasellus in sapien quis ex tempor
                        aliquet eu at sem.
                    </p>
                    <p>
                        Fusce vel dignissim risus. Curabitur ante sem, pharetra ut nisi vitae, consequat placerat nulla. Pellentesque
                        semper neque et leo consequat, et interdum velit mattis. In nulla sapien, interdum ac maximus eget, hendrerit
                        in elit. Curabitur dignissim mauris id quam consequat ultricies. Donec venenatis dui nisl, in tincidunt magna
                        ultrices tincidunt. Sed sagittis est ut ante efficitur gravida. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Aboutus;