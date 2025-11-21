import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SocialBanners from '../components/SocialBanners';
import UserNote from '../components/UserNotes';
import Footer from '../components/Footer';
import Question from '../components/Question';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CNotes = () => {
    useScrollAnimation();

    return (
        <>
            <Header
                title="C Programming Notes"
                subtitle="Important Questions, Programs, and Syntax"
            />
            <Navbar />
            <SocialBanners />
            <UserNote />

            {/* PART A - 2 Marks */}
            <div className="part fade-in" id="part-a">
                <div className="part-header">
                    <div className="part-title">Part A</div>
                    <div className="part-marks">(2 Marks Questions)</div>
                </div>

                <Question number="1" text="Recursion example">
                    <p><strong>Recursion Example (Factorial):</strong></p>
                    <div className="concept-box">
                        <pre><code>{`int comp_fact(int n)
{
    if (n==0)
    {
        return 1;
    }
    else
    {
        return comp_fact(n-1)*n;
    }
}`}</code></pre>
                    </div>
                </Question>

                <Question number="2" text="Pointer example">
                    <p><strong>Pointer Example:</strong></p>
                    <div className="concept-box">
                        <pre><code>{`#include <stdio.h>
int main()
{
    int var = 10;
    int* p;
    p = &var; // assign the address of a variable to a pointer
    printf("Value at ptr = %p \\n", p);
    printf("Value at var = %d \\n", var);
    printf("Value at *ptr = %d \\n", *p);
    return 0;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="3" text="Array with initialize">
                    <p>An array is a fixed-size collection of similar data items stored in contiguous memory locations.</p>
                    <div className="highlight-box">
                        <strong>Initialization Example:</strong><br />
                        <code>int arr[10] = {'{2, 5, 7, 34, 12, 9, 87, 23, 56, 19}'};</code>
                    </div>
                </Question>

                <Question number="4" text="Function, function call, declaration & initialization syntax">
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-code"></i> Syntax Rules</div>
                        <p><strong>Function Declaration:</strong><br />
                            <code>return_type function_name (para1_type, para2_type);</code></p>

                        <p><strong>Function Definition:</strong></p>
                        <pre><code>{`return_type function_name (para1_type para1_name)
{
    // body of the function
}`}</code></pre>

                        <p><strong>Function Call:</strong><br />
                            A statement that instructs the compiler to execute the function using the function name and parameters.</p>
                    </div>
                </Question>

                <Question number="5" text="Structure and Array difference">
                    <div className="order-example">
                        <div className="order-card">
                            <div className="order-name"><i className="fas fa-layer-group"></i> Array</div>
                            <div className="order-example-text">
                                An array is a fixed-size collection of <strong>similar</strong> data items (Homogeneous Collection) stored in contiguous memory locations.
                            </div>
                        </div>
                        <div className="order-card">
                            <div className="order-name"><i className="fas fa-cubes"></i> Structure</div>
                            <div className="order-example-text">
                                The structure is a user-defined data type that can be used to represent a collection of elements with <strong>different</strong> types into a single type.
                            </div>
                        </div>
                    </div>
                </Question>
            </div>

            {/* PART B - 5 Marks */}
            <div className="part fade-in" id="part-b">
                <div className="part-header">
                    <div className="part-title">Part B</div>
                    <div className="part-marks">(5 Marks Questions)</div>
                </div>

                <Question number="1" text="Linear search (program)">
                    <p><strong>Linear Search Program:</strong></p>
                    <div className="concept-box">
                        <pre><code>{`#include<stdio.h>
#include<conio.h>

void Ilinearsearch(int a[],int n,int key)
{
    int i;
    for (i=0;i<n;i++)
    {
        if (a[i]==key)
        {
            printf("\\n\\t%d exist at position %d",key,i);
            return;
        }
    }
    printf("\\n\\tkey does not exist");
}

int main()
{
    int i,n,a[100],key;
    printf("\\n\\tEnter number elements: ");
    scanf("%d",&n);
    printf("\\tEnter elements: ");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("\\n\\tEnter key: ");
    scanf("%d",&key);
    Ilinearsearch(a,n,key);
    return 0;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="2" text="Pass by value and pass by reference with define">
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-exchange-alt"></i> Pass by Value</div>
                        <p>Parameter passing in this method copies values from actual parameters into formal function parameters. As a result, any changes made inside the functions do not reflect in the caller’s parameters.</p>
                    </div>
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-link"></i> Pass by Reference</div>
                        <p>The caller’s actual parameters and the function’s actual parameters refer to the same locations, so any changes made inside the function are reflected in the caller’s actual parameters.</p>
                    </div>
                    <div className="highlight-box">
                        <strong>Example:</strong>
                        <pre><code>{`void swap_val(int a, int b) {
    int temp; temp=a; a=b; b=temp;
}
void swap_ref(int *x , int *y) {
    int temp; temp=*x; *x=*y; *y=temp;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="3" text="How pointer and array difference program">
                    <p><strong>Pointer and Array Relationship:</strong><br />
                        The name of an array is a pointer constant to its first element. Pointers can be used to traverse arrays using pointer arithmetic.</p>

                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-laptop-code"></i> Program (Traversing Array using Pointer)</div>
                        <pre><code>{`#include <stdio.h>
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *ptr = arr; // same as: int *ptr = &arr[0];
    printf("Array elements using pointer:\\n");
    for (int i = 0; i < 5; i++) {
        printf("%d ", *(ptr + i)); // dereference pointer
    }
    return 0;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="4" text="Structure initialize, declare example">
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-file-code"></i> Structure Declaration</div>
                        <p>Use the <code>struct</code> keyword.</p>
                        <pre><code>{`struct student
{
    int rollno;
    char stud_name[20];
    int mark1;
    int mark2;
    int mark3;
    char result[10];
}; s1,s2,s3...;`}</code></pre>
                    </div>
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-pen"></i> Structure Initialization</div>
                        <ul>
                            <li><strong>Method 1 (Assignment):</strong> <code>s.rollno=111;</code></li>
                            <li><strong>Method 2 (Initializer List):</strong> <code>struct student s = {'{111, "janu", 78, 89, 90, "pass"}'};</code></li>
                        </ul>
                    </div>
                </Question>
            </div>

            {/* PART C - 10 Marks */}
            <div className="part fade-in" id="part-c">
                <div className="part-header">
                    <div className="part-title">Part C</div>
                    <div className="part-marks">(10 Marks Questions)</div>
                </div>

                <Question number="1" text="Structure with pointer">
                    <p>A pointer pointing to the structure type is called a Structure Pointer or Pointer to Structure.</p>

                    <div className="highlight-box">
                        <strong>Syntax:</strong> <code>struct struct_name *ptr;</code><br />
                        <strong>Accessing members:</strong> Members can be accessed using the arrow operator (<code>-&gt;</code>) or the dereferencing operator combined with the dot operator (<code>(*ptr).member</code>).
                    </div>

                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-code"></i> Example Program</div>
                        <pre><code>{`#include<stdio.h>
#include<string.h>
struct student
{
    int rollno;
    char name[20];
    int m1, m2, m3;
    char result[10];
};
int main()
{
    struct student s, *ptr;
    ptr=&s;
    printf("\\nEnter roll number:");
    scanf("%d",&ptr->rollno);
    printf("\\nEnter student name:");
    scanf("%s", ptr->name);
    printf("\\nEnter Marks:");
    scanf("%d%d%d",&ptr->m1,&ptr->m2,&ptr->m3);
    if(ptr->m1>=50 && ptr->m2>=50 && ptr->m3>=50)
    {
        strcpy(ptr->result, "Pass");
    }
    else
    {
        strcpy(ptr->result, "Fail");
    }
    printf("\\nRoll number:%d", ptr->rollno);
    printf("\\nName:%s", ptr->name);
    printf("\\nMarks:%d\\t%d\\t%d", ptr->m1, ptr->m2, ptr->m3);
    printf("\\nResult:%s", ptr->result);
    return 0;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="2" text="Bubble sort => with program">
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-sort-amount-down"></i> Bubble Sort Program</div>
                        <pre><code>{`#include<stdio.h>
#include<conio.h>

void bubbleSort(int a[],int n)
{
    int i,j,temp;
    for (i=1;i<=n;i++)
    {
        for(j=0;j<=n-1-i;j++)
        {
            if(a[j]>a[j+1])
            {
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
}

int main()
{
    int i,n,a[100];
    printf("\\nEnter number elements: ");
    scanf("%d",&n);
    printf("Enter elements: ");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    bubbleSort(a,n);
    printf("\\nSorted array");
    for(i=0;i<n;i++)
    {
        printf("\\n%d",a[i]);
    }
    return 0;
}`}</code></pre>
                    </div>
                </Question>

                <Question number="3" text="Matrix multiplication">
                    <div className="concept-box">
                        <div className="concept-title"><i className="fas fa-th"></i> Matrix Multiplication Program</div>
                        <pre><code>{`#include<stdio.h>
int main()
{
    int m,n,p,q,a[10][10],b[10][10],c[10][10],i,j,k;
    printf("\\n Enter row and column first matrix:");
    scanf("%d%d",&m,&n);
    printf("\\n Enter row and column second matrix:");
    scanf("%d%d",&p,&q);

    if (n==p)
    {
        printf("Enter elements of first matrix");
        for(i=0;i<m;i++)
        {
            for(j=0;j<n;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
        printf("Enter elements of second matrix");
        for(i=0;i<p;i++)
        {
            for(j=0;j<q;j++)
            {
                scanf("%d",&b[i][j]);
            }
        }
        printf("\\n Multiplication of two matrices");
        for(i=0;i<m;i++)
        {
            printf("\\n");
            for(j=0;j<q;j++)
            {
                c[i][j]=0;
                for(k=0;k<p;k++)
                {
                    c[i][j]=c[i][j]+a[i][k]*b[k][j];
                }
                printf("%d\\t",c[i][j]);
            }
        }
    }
    else
    {
        printf("\\nThe number of columns in Matrix-1 must be equal to the number of rows in Matrix-2");
        return;
    }
    return 0;
}`}</code></pre>
                    </div>
                </Question>
            </div>

            <Footer title="C Programming Notes – Assignment Notes by Shankar" />
        </>
    );
};

export default CNotes;