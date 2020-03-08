import * as React from 'react';
import './Legend.scss'

class Legend extends React.Component {
  // TODO Re-write this component and css
  render() {
    return (
        <div>
          <div className="sc-jKVCRD ctohNN"
               style={{ "marginBottom": "8px" }}>
            <div className="sc-LKuAh kyrCAS"><span style={{ paddingTop: "10px" }}>Layer Legend</span>
            </div>
            <div className="sc-kaNhvL itZGKT">
              <div>
                <div className="legend--layer sc-bmyXtO dOmEkY">
                  <div className="legend--layer_name">Gender Pay Gap %</div>
                  <div>
                    <div className="legend--layer_type">Color</div>
                    <div className="legend--layer_color-schema">
                      <div>
                        <div className="legend--layer_color-legend">
                          <div className="sc-iGrrsa jfVKCG">
                            <svg width="156" height="140">
                              <g transform="translate(0, 0)">
                                <rect width="20" height="10" style={{ fill: `rgb(0, 104, 55 )` }}/>
                                <text x="28" y="9">-4.6 to -2.6</text>
                              </g>
                              <g transform="translate(0, 14)">
                                <rect width="20" height="10" style={{ fill: `rgb(26, 152, 80)` }}/>
                                <text x="28" y="9">-2.6 to -0.7</text>
                              </g>
                              <g transform="translate(0, 28)">
                                <rect width="20" height="10" style={{ fill: `rgb(102, 189, 99)` }}/>
                                <text x="28" y="9">-0.7 to 1.3</text>
                              </g>
                              <g transform="translate(0, 42)">
                                <rect width="20" height="10" style={{ fill: `rgb(252, 252, 122)` }}/>
                                <text x="28" y="9">1.3 to 3.3</text>
                              </g>
                              <g transform="translate(0, 56)">
                                <rect width="20" height="10" style={{ fill: `rgb(238, 230, 52)` }}/>
                                <text x="28" y="9">3.3 to 5.3</text>
                              </g>
                              <g transform="translate(0, 70)">
                                <rect width="20" height="10" style={{ fill: `rgb(189, 52, 52)` }}/>
                                <text x="28" y="9">5.3 to 7.2</text>
                              </g>
                              <g transform="translate(0, 84)">
                                <rect width="20" height="10" style={{ fill: `rgb(197, 0, 0)` }}/>
                                <text x="28" y="9">7.2 to 9.2</text>
                              </g>
                              <g transform="translate(0, 98)">
                                <rect width="20" height="10" style={{ fill: `rgb(167, 0, 0)` }}/>
                                <text x="28" y="9">9.2 to 11.2</text>
                              </g>
                              <g transform="translate(0, 112)">
                                <rect width="20" height="10" style={{ fill: `rgb(128, 0, 0)` }}/>
                                <text x="28" y="9">11.2 to 13.1</text>
                              </g>
                              <g transform="translate(0, 126)">
                                <rect width="20" height="10" style={{ fill: `rgb( 104, 0, 0)` }}/>
                                <text x="28" y="9">13.1 to 15.1</text>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="legend--layer_type">Stroke Color</div>
                    <div className="legend--layer_color-schema">
                      <div>
                        <div className="legend--layer_color-legend">
                          <div className="sc-iGrrsa jfVKCG">
                            <svg width="156" height="14">
                              <g transform="translate(0, 0)">
                                <rect width="20" height="10" style={{ fill: `rgb(255, 254, 230)` }}/>
                                <text x="28" y="9"/>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Legend;
