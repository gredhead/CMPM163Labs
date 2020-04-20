uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;
uniform vec3 colorD;
uniform vec3 colorE;
uniform vec3 colorF;

varying vec3 vUv;

void main() {
	if(vUv.z > .5 || vUv.z < -.5)
	{
		gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
	}
	else 
	{
		if(vUv.y > .5 || vUv.y < -.5)
		{
			gl_FragColor = vec4(mix(colorC, colorD, vUv.y), 1.0);
		}
		else
		{
			gl_FragColor = vec4(mix(colorE, colorF, vUv.x), 1.0);
		}
	}
}
