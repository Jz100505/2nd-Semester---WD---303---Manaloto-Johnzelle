import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for Two-Way Binding

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css'
})
export class DataBindingDemoComponent {
  // Text Interpolation
  title = "My First App!";
  description = "This is my new Angular Application";
  message = 'Data Binding Demonstration';

  // Property Binding
  // Make sure you have an image at src/assets/logo-angular.png
  imageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xAAuEAABBAIBAwMEAgICAwAAAAABAAIDEQQhEgUxQQYTURQiMmEjcYGRYqEHNEL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAQACAwEBAAAAAAAAAAABEQISMQMhQRME/9oADAMBAAIRAxEAPwD2LKzGRMcOX3AfKzOd1h72uY43R0VSv6s9+i478oaWcv7m1zc8X9VfoRNlEuJBQr57tQucCe6HldXZa5iSmfZ0g5ZCDVp3yd0JO/ZKcCQzUFG6W+yGc+1wx9OpOwasI3XpFYhZJBPGT93hA/iy1Jh/+1fhyinKOx4+LAFLE4h5C6NMbfhDNnb7ulmsfET7hWt9K9SbG8wPdQcfPystjhpaTe1x9Y6CYOYaIUfunPt64DYBHlOsj0H1Mx0LY8pxJ7ArVRTMlAMbg4fpbc/JOkWYlSSSWqSSSSQHifuGxtde/Q7oYvXDj4UyCiTkV5UckwIQ9bT+y4hMjOc11oaUGlI6Ms7qJ7rCYDPJURfRtSSodwQBjJeTaJROG+nC/B0qqN1UEbju+9qnqHGic8Ph/dKmyC6OSwrCB96KHyGh2q7lZYtJhZtD7nKQye68UqtzTG4ojFm4uBReTlXmIx0bg5aHpHV5Madt7Z5WWZ1KGNtSOUA6sCXBhOvKyvP2e69oxp2ZELZIzYKl8rAej/UjRI3GmJp2gT4W/Buq7Lo462YzsOkkkrJ4Y6Om8lyBpStdzG1IIbGlOqC1SJxnhzaKDyGPa4ja5gkMfdPSWcmK2Rhruq5+PxeWkd0bFka7rh7uduPcJDFRJDshCTN4K3mb3cPAVfKwSKpSoE62jMVwsWhZmcE8RohMmhY9pbbfhQyO2FAx9s1vS72QNKP03M2wSoC/2mEoniSOyHycXIMYkEbjH80jx09w/SovqsvlJ+K1Ob0k9Ljx5ZogcXJ0x3kH9rP9FYefPiaHhE9Z6lkzyY2OZ3PhiPJrCdNUWT0OauWdNDHtngcG9jpemdGnE+BC67PGivKMHqR40XEgDstx6R6q2dxgNDWrUc2yrvprUk1pLp1m8JhnFhWEEopUkYHyjICRW1kuDcpocLpVE54k0rORxLVWZLLKfJUop/AKKa+238qsY0tdooqJ55V4VYTtxLb82hKo7RkgsKDJZTQQmQHKAJ0oWjVotzD5CHe0gEIA3F3H37KcS7ooTEfxGwU73feaUgdIAxnPurRnqWFnSPo5oRy41yCpWzH2/u2EBO+Mu/j3+k5cFmrB3USGcYWVflCmWjbjbz5Q4kcB+JCgkkAN2Qpw59LKLKMfbavfTfU/Z6jC+yGhyx7JbPdWfSpKnjJPlR1FSvoCGUTRNkbVOFhJAen8j3+kwPrxSdL+gx43DC0iyjGRsYLOhXdV5mEbbtBS5M+W8RROPfwqkMdmdRjZpu0CM1shT5vTXMiDrs+UFBjkOoA68rXmM70ODgdhTx/IReBgNlh82gpY340/E732R+4Uui2dtqLKZYBH+lE/K9s7bV/Kl90yRXWkzQead/pRStFWuzIA27FqKWRoA2kDRkNG9JnuF2Ch58gA/bSFOTV2ppjJcimFoNIFrzG8uC4dLydadrrKALdkudFQpD8S8/cmaasJw6vKAnigvsrroOIX5kbCLs0qmCcAAGls/Q2BNm9SY+MAtZ9xJ7BZ9VUesYEDYcOGNjeIDRpMiW6aAmVeMTr50L3TO4//ACiehhkeW8O/wo8GPXI7BTOx3tlMmO4gjxaarGpmiZNDxrvpGenem4EbJjntH/G1mMfqUjQGzNNhFu6uK4tab/pPjrKjqbFz1AY2PK76XiGeAs8/i+YyyOFN7BQ5U8kjfzItAvla1tFxc7+1e7dTzzjvqmS2Ujg2gEPFm8Yi09lBPI4/0gciQj8CUVYpuQXSOA7JTynW0JA7VpSP5II75L2uAmGyuw2yAkHNLtimbjqWOBo2VJ4hFp9I2TFb7fNqG4JDD4sXuSAHta9O/wDHsxxs9sLCOLxTl5zjDi4Utr6Ia+XqTGgkbB0VPS49dSTN00f0ktJazfPTHhoNFMZeIsHaFa8+U/JvkqWuifqHauiFy+Yk6oIUv3QTc1UiKJBL9kqGYxjdhRvn4t0UPTpDfymk8j72EJK1HCKm0VC6NGmhbptpi69KV7QG0FC5qYO2KzYRkMXlRQjgwFwRbJoeBLnCksNzI6tKLl5PhRSZLHOIZtQumJ0nhLLHn93+Px8o2eBvshzOxQHTo/c/FWch/iawKKqQNjO4OWq9K5Ig6hG5xoa2sxEz+TaJ+oMMjeJP+Fn16VHu8GVHJE1zXiq+Ul5Xg+oZIscN5u/2ko8qfgxr2fP/AEozEbu1ZTthDSWm0A8nl9q1lFiItIUb7CmIeVy1gvaqVFiHiXd0QxjQLT00CyoppCaawHarSw88wbQCE52pDiTOcC5pUwwuIskJDAt2aXTYw4gFSOjaNhOwdk9GO3wn2qrX6Qv0oNfcVZxkWL7Iz2oXgUAEtPGdnhEX4qIMLngAbV/k4bTugULD02SWYFooBPWnPx3oV0uLixGvisWEXgdNeG0G2o83+C2uFELO1fXxXn2CcOGygpMgB/Fp2flcZmXZIvX9qvL+TwQljG1cMlk4pKLHkcIhYJ/oJJZB5CIYiDbnX+l1NECDx0jJ8UsJABBHygnh4cjm60wMYyO50nbF3ICl4kn7l2N649lacCP7HW0RhxtFFzLTzBobXkpmP4MG0ysHT0Y6aDarpI3nuKRMMpcbcdLqZoJ/IILFY6F1eU0bDZVmI2kftROiDXWjTxxEwmPYRMTSGAVtNA5pIZ8rUdI6LHPGHPq+6F8RSQ4Eko5EEq3wOmcSOQpaEYGNjQW54Cpuo9R9oO9oaHlGO747OYJeYMNluI5fCzXXS2Ue4PPwh8nOdPLbnEqHMkJZROlnYy/0d6ocuEhxLQSrH0x0+LLzgJxYaOXH5UEj/ctjO6sekRzYkrZo6LvI+QnfTg6bzH6bhMiAMDb/AEEkDF1wNYA6BwPlJc98nP49jPWHT8eDIcY2kXZq1iZdOofKSSr4/bunpyWgNtK/40kluVDkC9rkNBdtJJOE4nPF1DSYyOPlJJOCpYnu+U0jib2kkgkeE8/WM/tbKDLmhiBY6tJJJt/jU+f1bLkfxdJq/CmnypH9P4u49vhJJU17U+M0OdtSZ/2g0nSWVYfIDwIWOmsjauoWBuwkkmxia0kklKn/2Q==';
  w = 100;
  h = 100;
  altText = 'speed';

  // Style Binding
  textColor = 'blue';

  // Class Binding
  isHighlighted = true;

  // Two-Way Binding
  yourName = '';

  // Event Binding
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
