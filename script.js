function analyzeProduct(){

let product =
document.getElementById("product").value;

document.getElementById("result").innerHTML =

`
<h2>${product}</h2>

<p>SEO Score: 89/100</p>

<p>Competition: Medium</p>

<p>Suggested Keywords:</p>

<ul>
<li>Best ${product}</li>
<li>Buy ${product}</li>
<li>${product} Online</li>
</ul>

<h3>Marketing Copy</h3>

<p>
Boost your experience with our premium
${product}.
Designed for performance and quality.
</p>
`;

}

